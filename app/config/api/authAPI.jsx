/* eslint-disable*/
import * as axios from 'axios';

const authAPI = (baseURL) => {
    return {
        login: (credentials) => {
            return axios.post(baseURL + '/authenticate', credentials).then(res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('authenticated', 'true');
                return res.data;
            });
        },

        logout: () => {
            localStorage.removeItem('token');
            localStorage.removeItem('authenticated');
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 100)
            });
            //return axios.post(baseURL + '/unsubscribe', {withCredentials: true});
        },

        ping: () => {
            console.log('here');
            return axios.get(baseURL + '/ping', {headers: {'x-access-token': localStorage.getItem('token')}})
                .then(res => res.data);
        }
    }
};

export default authAPI;