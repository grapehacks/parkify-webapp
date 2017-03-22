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