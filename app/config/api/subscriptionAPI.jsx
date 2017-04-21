/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const subscribe = ({params, token}) => {
    return axios
        .post(URL + '/api/participate/register', params, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const unsubscribe = ({params, token}) => {
    return axios
        .post(URL + '/api/participate/unregister', params, {
                headers: {'x-access-token': token}
        })
        .then(res => res.data);
};