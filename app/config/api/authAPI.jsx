/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const login = (credentials) => {
    return axios
        .post(URL + '/authenticate', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('authenticated', 'true');
            return res.data;
        });
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('authenticated');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100)
    });
    //return axios.post(baseURL + '/unsubscribe', {withCredentials: true});
};

export const ping = () => {
    return axios
        .get(URL + '/ping', {headers: {'x-access-token': localStorage.getItem('token')}})
        .then(res => res.data);
};