/* eslint-disable*/
import * as axios from 'axios';

const authAPI = (baseURL) => {
    return {
        login: (credentials) => {
            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve({});
            //     }, 4000)
            // });
            return axios.post(baseURL + '/authenticate', credentials).then(res => {
                localStorage.setItem('token', res.data.token);
                return res.data;
            });
        },

        logout: () => {
            localStorage.removeItem('token');
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000)
            });
            //return axios.post(baseURL + '/unsubscribe', {withCredentials: true});
        }
    }
};

export default authAPI;