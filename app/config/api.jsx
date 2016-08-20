import subscriptionAPI from './api/subscriptionAPI.jsx';
import authAPI from './api/authAPI.jsx';
import messagesAPI from './api/messagesAPI.jsx';
const URL = 'http://krk.grapeup.com:8080';

const API = {
    subscriptionAPI: subscriptionAPI(URL),
    authAPI: authAPI(URL),
    messagesAPI: messagesAPI(URL)
};

export default API;