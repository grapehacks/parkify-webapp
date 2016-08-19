/* eslint-disable*/
import * as axios from 'axios';

const messagesAPI = (baseURL) => {
    return {
        getMessages: (credentials) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([]);
                }, 4000)
            });
            // return axios.post(baseURL + '/authenticate', credentials).then(res => {
            //     localStorage.setItem('token', res.data.token);
            //     return res.data;
            // });
        },
    }
};

export default messagesAPI;