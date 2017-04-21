import { LOGGED_IN, LOGGING_IN, LOGIN_FAILED, LOGOUT, LOGGED_OUT,
    PING_SUCCESS, SUBSCRIBE_SUCCESS, UNSUBSCRIBE_SUCCESS,
    EDIT_LICENCE_NUMBER_SUCCESS, EDIT_LICENCE_NUMBER_FAILED, CLEAR_MESSAGES,
    CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED } from '../actions/actionTypes'

const initialState = {
    logged: false,
    logging: false,
    error: '',
    success: '',
    token: '',
    date: '',
    user: {}
};

export default function authReducer(state = initialState, action = undefined) {
    if(action === undefined) {
        return state;
    }

    switch (action.type) {
        case LOGGING_IN:
            return Object.assign({}, state, {
                logging: true,
                error: ''
            });
        case LOGGED_IN:
            return Object.assign({}, state, {
                user: action.payload.user,
                token: action.payload.token,
                logging: false,
                logged: true
            });
        case LOGOUT:
            return Object.assign({}, state, {
                user: {},
                token: '',
                logging: false,
                logged: false
            });
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                logging: false,
                error: action.payload.error
            });
        case LOGGED_OUT:
            return Object.assign({}, state, {
                logged: false,
                logging: false,
                error: '',
                token: '',
                user: {}
            });
        case PING_SUCCESS:
            if (action.payload.user) {
                return Object.assign({}, state, {
                    logged: true,
                    date: action.payload.date,
                    user: action.payload.user
                });
            } else {
                return Object.assign({}, state, {
                    logged: false,
                    logging: false,
                    user: {}
                });
            }
        case SUBSCRIBE_SUCCESS: // after subscribe/un-subscribe we need to refresh auth.user data
        case UNSUBSCRIBE_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload.user
            });
        case EDIT_LICENCE_NUMBER_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload.user,
                success: 'Car licence number successfully changed.',
                error: ''
            });
        case CHANGE_PASSWORD_FAILED:
        case EDIT_LICENCE_NUMBER_FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        case CLEAR_MESSAGES:
            return Object.assign({}, state, {
                error: '',
                success: ''
            });
        case CHANGE_PASSWORD_SUCCESS:
            return Object.assign({}, state, {
                success: 'Password was successfully changed.'
            });
        default:
            return state;
    }
}

