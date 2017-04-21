/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const login = (credentials) => {
    return axios
        .post(URL + '/authenticate', credentials)
        .then(res => res.data);
};

export const logout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100)
    });
    //return axios.post(baseURL + '/unsubscribe', {withCredentials: true});
};

export const ping = (token) => {
    return axios
        .get(URL + '/ping', {headers: {'x-access-token': token}})
        .then(res => res.data);
};