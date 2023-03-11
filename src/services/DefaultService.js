/** Dependencies */
import Client from './BaseService';

const client = new Client(process.env.BASE_URL);

class DefaultService {
    getUserInfo = () => {
        return client.get(`/UserInfo`);
    };
}

export default new DefaultService();
