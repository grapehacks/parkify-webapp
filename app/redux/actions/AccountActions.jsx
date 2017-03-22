import {EDIT_LICENCE_NUMBER, EDIT_LICENCE_NUMBER_SUCCESS, EDIT_LICENCE_NUMBER_FAILED} from './actionTypes';

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