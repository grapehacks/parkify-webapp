import subscriptionAPI from './api/subscriptionAPI.jsx';
import authAPI from './api/authAPI.jsx';
const URL = 'http://10.20.1.104:8080';

const API = {
    subscriptionAPI: subscriptionAPI(URL),
    authAPI: authAPI(URL)
};

export default API;