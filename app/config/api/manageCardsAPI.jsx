/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const searchCards = ({token, cardNameLike}) => {
    return axios
        .get(URL + `/api/cards/like?name=${cardNameLike}`, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const fetchCards = ({token}) => {
    return axios
        .get(URL + `/api/cards`, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const createCard = ({token, card}) => {
    return axios
        .post(URL + `/api/cards`, card, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const updateCard = ({token, card}) => {
    return axios
        .put(URL + `/api/cards/${card._id}`, card, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};

export const deleteCard = ({token, id}) => {
    return axios
        .delete(URL + `/api/cards/${id}`, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};