import {LOGGED_IN, LOGGING_IN, LOGIN_FAILED, LOGOUT, LOGGED_OUT, PING} from '../actions/authActions.jsx'

const initialState = {
    logged: false,
    logging: false,
    error: '',
    token: '',
    date: '',
    user: {}
};

export default function authReducer(state = initialState, action = undefined) {
    switch (action.type) {
        case LOGGING_IN:
            return Object.assign({}, state, {
                logging: true,
                error: '',
            });
        case LOGGED_IN:
            return Object.assign({}, state, {
                user: action.user,
                token: action.token,
                logging: false
            });
        case LOGOUT:
            return Object.assign({}, state, {
                user: {},
                token: '',
                logged: false
            });
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                logging: false,
                error: action.error
            });
        case LOGGED_OUT:
            return Object.assign({}, state, {
                logged: false,
                logging: false,
                error: '',
                token: '',
                user: {}
            });
        case PING:
            if (action.user) {
            console.log(action);
                return Object.assign({}, state, {
                    logged: true,
                    error: '',
                    date: action.date,
                    user: action.user
                });
            } else {
                return Object.assign({}, state, {
                    logged: false,
                    user: {}
                });
            }
        default:
            return state;
    }
}

