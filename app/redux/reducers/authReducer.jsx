import {LOGGED_IN, LOGGING_IN, LOGIN_FAILED, LOGOUT} from '../actions/authActions.jsx'

const initialState = {
    logged: false,
    logging: false,
    error: '',
    token: '',
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
        default:
            return state
    }
}

