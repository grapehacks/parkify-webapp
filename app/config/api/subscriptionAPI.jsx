/* eslint-disable*/
import * as axios from 'axios';

const subscriptionAPI = (baseURL) => {
    return {
        subscribe: (params) => {
            return axios.post(baseURL + '/api/participate/register', params, {
                headers: {'x-access-token': localStorage.getItem('token')}
            })
                .then(res => res.data);
        },

        unsubscribe: (params) => {
            return axios.post(baseURL + '/api/participate/unregister', params, {
                headers: {'x-access-token': localStorage.getItem('token')}
            })
                .then(res => res.data);
        }
    }
};

export default subscriptionAPI;