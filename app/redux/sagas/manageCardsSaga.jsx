import 'babel-polyfill'; //required for yield
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {SEARCH_CARDS, FETCH_CARDS, DELETE_CARD, UPDATE_CARD, CREATE_CARD} from '../actions/actionTypes';
import {fetchCardsSuccess, fetchCardsFailed, searchCardsSuccess, searchCardsFailed, cardOperationSuccess, cardOperationFailed} from '../actions/manageCardsActions';
import {fetchCards, searchCards, createCard, updateCard, deleteCard} from '../../config/api/manageCardsAPI';

export function* fetchCardsSaga() {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(fetchCards, {token});
        yield put(fetchCardsSuccess({cards: response}));

    } catch(e) {
        yield put(fetchCardsFailed({ error: 'Failed to fetch cards.'}));
    }
}

export function* searchCardsSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(searchCards, {token, cardNameLike: payload.name});
        yield put(searchCardsSuccess({cards: response}));

    } catch(e) {
        yield put(searchCardsFailed({ error: 'Failed to find cards.'}));
    }
}

export function* createCardSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const card = {
            name: payload.card.name,
            type: payload.card.type,
            active: payload.card.active,
            removed: payload.card.removed
        };
        yield call(createCard, {token, card});
        yield put(cardOperationSuccess({ success: 'Card was successfully created.'}));

        const response = yield call(fetchCards, {token});
        yield put(fetchCardsSuccess({cards: response}));

    } catch(e) {
        yield put(cardOperationFailed({ error: 'Failed to create card.'}));
    }
}

export function* updateCardSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const card = {
            _id: payload.card._id,
            name: payload.card.name,
            type: payload.card.type,
            active: payload.card.active,
            removed: payload.card.removed
        };
        yield call(updateCard, {token, card});
        yield put(cardOperationSuccess({ success: 'Card was successfully updated.'}));

        const response = yield call(fetchCards, {token});
        yield put(fetchCardsSuccess({cards: response}));

    } catch(e) {
        yield put(cardOperationFailed({ error: 'Failed to update card.'}));
    }
}

export function* deleteCardSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        yield call(deleteCard, {token, id: payload._id});
        yield put(cardOperationSuccess({ success: 'Card was successfully deleted.'}));

        const response = yield call(fetchCards, {token});
        yield put(fetchCardsSuccess({cards: response}));

    } catch(e) {
        yield put(cardOperationFailed({ error: 'Failed to delete card.'}));
    }
}

export default function* watch() {
    yield* [
        takeLatest(FETCH_CARDS, fetchCardsSaga),
        takeLatest(SEARCH_CARDS, searchCardsSaga),
        takeLatest(CREATE_CARD, createCardSaga),
        takeLatest(UPDATE_CARD, updateCardSaga),
        takeLatest(DELETE_CARD, deleteCardSaga)
    ];
}