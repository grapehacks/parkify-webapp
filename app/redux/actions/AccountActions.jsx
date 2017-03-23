import {EDIT_LICENCE_NUMBER, EDIT_LICENCE_NUMBER_SUCCESS, EDIT_LICENCE_NUMBER_FAILED, CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED} from './actionTypes';

export const editLicenceNumber = (payload) => ({
    type: EDIT_LICENCE_NUMBER,
    payload
});

export const editLicenceNumberSuccess = (payload) => ({
    type: EDIT_LICENCE_NUMBER_SUCCESS,
    payload
});

export const editLicenceNumberFailed = (payload) => ({
    type: EDIT_LICENCE_NUMBER_FAILED,
    payload
});

export const changePassword = (payload) => ({
    type: CHANGE_PASSWORD,
    payload
});

export const changePasswordSuccess = (payload) => ({
    type: CHANGE_PASSWORD_SUCCESS,
    payload
});

export const changePasswordFailed = (payload) => ({
    type: CHANGE_PASSWORD_FAILED,
    payload
});