/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const subscribe = (params) => {
    return axios
        .post(URL + '/api/participate/register', params, {
            headers: {'x-access-token': localStorage.getItem('token')}
        })
        .then(res => res.data);
};

export const unsubscribe = (params) => {
    return axios
        .post(URL + '/api/participate/unregister', params, {
                headers: {'x-access-token': localStorage.getItem('token')}
        })
        .then(res => res.data);
};