/** Dependencies */
// import process from 'process';
import axios from 'axios';
import Cookies from 'js-cookie';
import history from '../router/history'; // route degistir
import { toast } from 'react-toastify';

const StatusCode = {
    Unauthorized: 401,
    Forbidden: 403,
    TooManyRequests: 429,
    InternalServerError: 500,
    NotFound: 404,
    BadRequest: 400,
};

export default class ApiService {
    baseURL: string | undefined  = import.meta.env.VITE_BASE_URL;
    failureInterceptor = (error: {
        response: { status: number; data: { messages: any } };
        errorMessage: any;
        message: any;
    }) => {
        if (error.response.status === StatusCode.Unauthorized) {
            toast.error('Unauthorized', {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
        if (error.response.status === StatusCode.Forbidden) {
            if (error.errorMessage) {
                toast.error(error.errorMessage);
            }
        }
        if (error.response.status === StatusCode.TooManyRequests) {
            if (error.errorMessage) {
                toast.error(error.errorMessage);
            }
        }
        if (error.response.status === StatusCode.NotFound) {
            if (error.errorMessage) {
                toast.error(error.errorMessage);
            }
        }
        if (error.response.status === StatusCode.BadRequest) {
            const { messages } = error.response.data;

            if (messages) {
                messages.forEach((item: any) => {
                    toast.error(item || error.message);
                });
            } else {
                toast.error('Beklenmedik bir hata oluştu.');
            }
        }
        if (error.response.status === StatusCode.InternalServerError) {
            history.push('/500');
        }

        return Promise.reject(error);
    };

    createAxiosInstance = () => {
        const instance = axios.create({
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`,
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Credentials': true,
                'X-Requested-With': 'XMLHttpRequest',
            },
            validateStatus: (status) => status >= 200 && status <= 500 && status !== 401 && status !== 400,
            baseURL: this.baseURL,
        });

        instance.interceptors.response.use((response) => response, this.failureInterceptor);
        return instance;
    };

    get = (url = '', ...params: any[]) => {
        const axiosInstance = this.createAxiosInstance();
        return axiosInstance.get(this.baseURL + url, ...params);
    };

    post(url = '', ...params: any[]) {
        const axiosInstance = this.createAxiosInstance();
        return axiosInstance.post(process.env.BASE_URL + url, ...params);
    }

    put(url = '', ...params: any[]) {
        const axiosInstance = this.createAxiosInstance();
        return axiosInstance.put(this.baseURL + url, ...params);
    }

    delete(url = '', ...params: any[]) {
        const axiosInstance = this.createAxiosInstance();
        return axiosInstance.delete(this.baseURL + url, ...params);
    }

    patch(url = '', ...params: any[]) {
        const axiosInstance = this.createAxiosInstance();
        return axiosInstance.patch(this.baseURL + url, ...params);
    }
}
