import Cookies from 'js-cookie';

class CookieService {
    static getItem = (key: string) => {
        return Cookies.get(key);
    };

    static setItem = (key: string, value: string) => {
        return Cookies.set(key, value);
    };

    static removeItem = (key: string) => {
        return Cookies.remove(key);
    };
}

export default CookieService;
