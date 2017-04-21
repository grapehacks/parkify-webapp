/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const searchUsers = ({token, userNameLike}) => {
    return axios
        .get(URL + `/api/users/like?name=${userNameLike}`, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const fetchUsers = ({token}) => {
    return axios
        .get(URL + `/api/users`, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const createUser = ({token, user}) => {
    return axios
        .post(URL + `/api/users`, user, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const updateUser = ({token, user}) => {
    return axios
        .put(URL + `/api/users/${user._id}`, user, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const deleteUser = ({token, id}) => {
    return axios
        .delete(URL + `/api/users/${id}`, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};