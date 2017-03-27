import 'babel-polyfill'; //required for yield
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {SEARCH_USERS, FETCH_USERS, DELETE_USER, UPDATE_USER, CREATE_USER} from '../actions/actionTypes';
import {fetchUsersSuccess, fetchUsersFailed, searchUsersSuccess, searchUsersFailed, userOperationSuccess, userOperationFailed} from '../actions/manageUsersActions';
import {fetchUsers, searchUsers, createUser, updateUser, deleteUser} from '../../config/api/manageUsersAPI';

export function* fetchUsersSaga() {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(fetchUsers, {token});
        yield put(fetchUsersSuccess({users: response}));

    } catch(e) {
        yield put(fetchUsersFailed({ error: 'Failed to fetch users.'}));
    }
}

export function* searchUsersSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(searchUsers, {token, userNameLike: payload.name});
        yield put(searchUsersSuccess({users: response}));

    } catch(e) {
        yield put(searchUsersFailed({ error: 'Failed to find users.'}));
    }
}

export function* createUserSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const user = {
            name: payload.user.name,
            email: payload.user.email,
            licenceNumber: payload.user.licenceNumber,
            removed: payload.user.removed
        };
        yield call(createUser, {token, user});
        yield put(userOperationSuccess({ success: 'User was successfully created.'}));

        const response = yield call(fetchUsers, {token});
        yield put(fetchUsersSuccess({users: response}));

    } catch(e) {
        yield put(userOperationFailed({ error: 'Failed to create user.'}));
    }
}

export function* updateUserSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const user = {
            _id: payload.user._id,
            name: payload.user.name,
            email: payload.user.email,
            licenceNumber: payload.user.licenceNumber,
            removed: payload.user.removed
        };
        yield call(updateUser, {token, user});
        yield put(userOperationSuccess({ success: 'User was successfully updated.'}));

        const response = yield call(fetchUsers, {token});
        yield put(fetchUsersSuccess({users: response}));

    } catch(e) {
        yield put(userOperationFailed({ error: 'Failed to update user.'}));
    }
}

export function* deleteUserSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        yield call(deleteUser, {token, id: payload._id});
        yield put(userOperationSuccess({ success: 'User was successfully deleted.'}));

        const response = yield call(fetchUsers, {token});
        yield put(fetchUsersSuccess({users: response}));

    } catch(e) {
        yield put(userOperationFailed({ error: 'Failed to delete user.'}));
    }
}

export default function* watch() {
    yield* [
        takeLatest(FETCH_USERS, fetchUsersSaga),
        takeLatest(SEARCH_USERS, searchUsersSaga),
        takeLatest(CREATE_USER, createUserSaga),
        takeLatest(UPDATE_USER, updateUserSaga),
        takeLatest(DELETE_USER, deleteUserSaga)
    ];
}