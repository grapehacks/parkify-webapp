/* eslint-disable*/
import axios from 'axios';

const subscriptionAPI = (baseURL) => {
    return {
        subscribe: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000)
            });
            //return axios.post(baseURL + '/subscribe', {withCredentials: true});
        },

        unsubscribe: () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000)
            });
            //return axios.post(baseURL + '/unsubscribe', {withCredentials: true});
        }
    }
};

module.exports = subscriptionAPI;