/* eslint-disable*/
import * as axios from 'axios';

const subscriptionAPI = (baseURL) => {
    return {
        subscribe: (params) => {
            return axios.post(baseURL + '/api/participate/register', params, {
                headers: {'x-access-token': localStorage.getItem('token')}
            });
        },

        unsubscribe: (params) => {
            return axios.post(baseURL + '/api/participate/unregister', params, {
                headers: {'x-access-token': localStorage.getItem('token')}
            });
        }
    }
};

export default subscriptionAPI;