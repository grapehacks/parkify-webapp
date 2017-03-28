import {FETCH_CARDS, FETCH_CARDS_FAILED, FETCH_CARDS_SUCCESS, SEARCH_CARDS, SEARCH_CARDS_SUCCESS, SEARCH_CARDS_FAILED, CARD_OPERATION_FAILED, CARD_OPERATION_SUCCESS, UPDATE_CARD, CREATE_CARD, DELETE_CARD, CLEAR_MESSAGES} from './actionTypes';

export const fetchCards = (payload) => ({
    type: FETCH_CARDS,
    payload
});

export const fetchCardsSuccess = (payload) => ({
    type: FETCH_CARDS_SUCCESS,
    payload
});

export const fetchCardsFailed = (payload) => ({
    type: FETCH_CARDS_FAILED,
    payload
});

export const searchCards = (payload) => ({
    type: SEARCH_CARDS,
    payload
});

export const searchCardsSuccess = (payload) => ({
    type: SEARCH_CARDS_SUCCESS,
    payload
});

export const searchCardsFailed = (payload) => ({
    type: SEARCH_CARDS_FAILED,
    payload
});


export const updateCard = (payload) => ({
    type: UPDATE_CARD,
    payload
});

export const createCard = (payload) => ({
    type: CREATE_CARD,
    payload
});

export const deleteCard = (payload) => ({
    type: DELETE_CARD,
    payload
});

export const cardOperationFailed = (payload) => ({
    type: CARD_OPERATION_FAILED,
    payload
});

export const cardOperationSuccess = (payload) => ({
    type: CARD_OPERATION_SUCCESS,
    payload
});

export const clearMessages = (payload) => ({
    type: CLEAR_MESSAGES,
    payload
});