/* eslint-disable*/
import * as axios from 'axios';
import {URL} from '../api';

export const fetchLastDraw = ({token}) => {
    return axios
        .get(URL + `/api/history/last`, {
            headers: {'x-access-token': token}
        })
        .then(res => res.data);
};