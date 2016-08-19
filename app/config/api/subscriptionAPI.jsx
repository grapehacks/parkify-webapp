/* eslint-disable*/
import * as axios from 'axios';

const subscriptionAPI = (baseURL) => {
    return {
        subscribe: () => {
            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve();
            //     }, 1000)
            // });
            return axios
                .post(baseURL + '/subscribe',
                    {
                        headers: {'x-access-token': localStorage.getItem('token')}
                    }
                );
        },

        unsubscribe: () => {
            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve();
            //     }, 1000)
            // });
            return axios
                .post(baseURL + '/unsubscribe',
                    {
                        headers: {'x-access-token': localStorage.getItem('token')}
                    }
                );
        }
    }
};

export default subscriptionAPI;