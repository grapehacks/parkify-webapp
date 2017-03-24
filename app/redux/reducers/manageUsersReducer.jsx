import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILED, SEARCH_USERS_FAILED, SEARCH_USERS_SUCCESS, USER_OPERATION_SUCCESS, USER_OPERATION_FAILED, CLEAR_MESSAGES } from '../actions/actionTypes'

const initialState = {
    users: [],
    error: '',
    success: ''
};

export default function manageUsersReducer(state = initialState, action = undefined) {
    if(action === undefined) {
        return state;
    }

    switch (action.type) {
        case CLEAR_MESSAGES:
            return Object.assign({}, state, {
                error: '',
                success: ''
            });
        case USER_OPERATION_SUCCESS:
            return Object.assign({}, state, {
                error: '',
                success: action.payload.success
            });
        case FETCH_USERS_SUCCESS:
        case SEARCH_USERS_SUCCESS:
            return Object.assign({}, state, {
                users: action.payload.users
            });
        case USER_OPERATION_FAILED:
        case FETCH_USERS_FAILED:
        case SEARCH_USERS_FAILED:
            return Object.assign({}, state, {
                error: action.payload.error,
                success: ''
            });
        default:
            return state
    }
}

