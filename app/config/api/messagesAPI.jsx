/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const getMessages = (credentials) => {
    return axios
        .get(URL + '/api/messages?count=30', {
            headers: {'x-access-token': localStorage.getItem('token')}
        });
};

export const markAsRead = (id) => {
    return axios
        .post(URL + `/api/messages/${id}/read`, null, {
            headers: {'x-access-token': localStorage.getItem('token')}
        });
};
