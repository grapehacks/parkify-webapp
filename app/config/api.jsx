import subscriptionAPI from './api/subscriptionAPI.jsx';
import authAPI from './api/authAPI.jsx';
import messagesAPI from './api/messagesAPI.jsx';
//const URL = 'http://10.20.1.104:8080';
const URLG = 'http://krk.grapeup.com:8080';

const API = {
    subscriptionAPI: subscriptionAPI(URLG),
    authAPI: authAPI(URLG),
    messagesAPI: messagesAPI(URLG)
};

export default API;