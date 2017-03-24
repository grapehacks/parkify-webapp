import {FETCH_USERS, FETCH_USERS_FAILED, FETCH_USERS_SUCCESS, SEARCH_USERS, SEARCH_USERS_SUCCESS, SEARCH_USERS_FAILED, USER_OPERATION_FAILED, USER_OPERATION_SUCCESS, UPDATE_USER, CREATE_USER, DELETE_USER, CLEAR_MESSAGES} from './actionTypes';

export const fetchUsers = (payload) => ({
    type: FETCH_USERS,
    payload
});

export const fetchUsersSuccess = (payload) => ({
    type: FETCH_USERS_SUCCESS,
    payload
});

export const fetchUsersFailed = (payload) => ({
    type: FETCH_USERS_FAILED,
    payload
});

export const searchUsers = (payload) => ({
    type: SEARCH_USERS,
    payload
});

export const searchUsersSuccess = (payload) => ({
    type: SEARCH_USERS_SUCCESS,
    payload
});

export const searchUsersFailed = (payload) => ({
    type: SEARCH_USERS_FAILED,
    payload
});


export const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload
});

export const createUser = (payload) => ({
    type: CREATE_USER,
    payload
});

export const deleteUser = (payload) => ({
    type: DELETE_USER,
    payload
});

export const userOperationFailed = (payload) => ({
    type: USER_OPERATION_FAILED,
    payload
});

export const userOperationSuccess = (payload) => ({
    type: USER_OPERATION_SUCCESS,
    payload
});

export const clearMessages = (payload) => ({
    type: CLEAR_MESSAGES,
    payload
});