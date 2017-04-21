import {FETCH_LAST_DRAW, FETCH_LAST_DRAW_SUCCESS, FETCH_LAST_DRAW_FAILED} from './actionTypes';

export const fetchLastDraw = (payload) => ({
    type: FETCH_LAST_DRAW,
    payload
});

export const fetchLastDrawSuccess = (payload) => ({
    type: FETCH_LAST_DRAW_SUCCESS,
    payload
});

export const fetchLastDrawFailed = (payload) => ({
    type: FETCH_LAST_DRAW_FAILED,
    payload
});

