/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const editLicenceNumber = ({id, licenceNumber, token}) => {
    return axios
        .put(URL + `/api/users/${id}/licence`, {licenceNumber}, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const changePassword = ({id, oldPassword, newPassword, confirmPassword, token}) => {
    return axios
        .post(URL + `/api/users/${id}/changepassword`, {oldPassword, newPassword, confirmPassword}, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};