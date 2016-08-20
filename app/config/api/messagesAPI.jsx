/* eslint-disable*/
import * as axios from 'axios';

const messagesAPI = (baseURL) => {
    return {
        getMessages: (credentials) => {
            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve({messages: [
            //             {_id: 1, text: "Message text Loreim ipsum dolor sit ament", topic:"Topic Lorem Ipsum", type: 0, read: true, date: 1471648345302},
            //             {_id: 2, text: "Message text Loreim ipsum dolor sit ament", topic:"Topic Lorem Ipsum", type: 1, read: true, date: 1471648345402},
            //             {_id: 3,text: "Message text Loreim ipsum dolor sit ament", topic:"Topic Lorem Ipsum", type: 2, read: true, date: 1471648345502},
            //             {_id: 4,text: "Message text Loreim ipsum dolor sit ament", topic:"Topic Lorem Ipsum", type: 3, read: true, date: 1471648345602},
            //             {_id: 5,text: "Message text Loreim ipsum dolor sit ament", topic:"Topic Lorem Ipsum", type: 4, read: true, date: 1471648345702},
            //             {_id: 6,text: "Message text Loreim ipsum dolor sit ament", topic:"Topic Lorem Ipsum", type: 5, read: true, date: 1471648345802}
            //             ]});
            //     }, 1000)
            // });


            return axios
                .get(baseURL + '/api/messages?count=30', {
                    headers: {'x-access-token': localStorage.getItem('token')}
                });
            /*
             text: String,
             topic: String,
             type: { type:Number, default: 4, min: 0, max: 6 },
             read: Boolean,
             date: Date

             */
            // return axios.post(baseURL + '/authenticate', credentials).then(res => {
            //     localStorage.setItem('token', res.data.token);
            //     return res.data;
            // });
        },
    }
};

export default messagesAPI;