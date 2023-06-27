import axios from 'axios';
import { useStorage } from './storage';
import { ILoginResponse } from '../lib/interfaces/user.interface';

const baseUrl = "http://10.0.2.2:3002";
const token = useStorage.getItem("authToken")

axios.defaults.baseURL =`${baseUrl}/api`;
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.patch['Accept'] = 'application/json';
axios.defaults.headers.delete['Accept'] = 'application/json';

export const setAuthorizationHeader = (data: ILoginResponse) => {
    const authToken = `${data.token}`;

    useStorage.setItem('token', authToken);
    useStorage.setItem('user', JSON.stringify(data.data));
    axios.defaults.headers.common['Authorization'] = authToken;
};

export default axios.create({
    baseURL: `${baseUrl}/api`,
    responseType: `json`,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});