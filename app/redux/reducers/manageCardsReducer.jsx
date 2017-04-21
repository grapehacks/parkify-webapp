import { FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILED, SEARCH_CARDS_FAILED, SEARCH_CARDS_SUCCESS, CARD_OPERATION_SUCCESS, CARD_OPERATION_FAILED, CLEAR_MESSAGES } from '../actions/actionTypes'

const initialState = {
    cards: [],
    searchCards: [],
    error: '',
    success: ''
};

export default function manageCardsReducer(state = initialState, action = undefined) {
    if(action === undefined) {
        return state;
    }

    switch (action.type) {
        case CLEAR_MESSAGES:
            return Object.assign({}, state, {
                error: '',
                success: ''
            });
        case CARD_OPERATION_SUCCESS:
            return Object.assign({}, state, {
                error: '',
                success: action.payload.success
            });
        case FETCH_CARDS_SUCCESS:
            return Object.assign({}, state, {
                cards: action.payload.cards,
                searchCards: []
            });
        case SEARCH_CARDS_SUCCESS:
            return Object.assign({}, state, {
                cards: [],
                searchCards: action.payload.cards
            });
        case CARD_OPERATION_FAILED:
        case FETCH_CARDS_FAILED:
        case SEARCH_CARDS_FAILED:
            return Object.assign({}, state, {
                error: action.payload.error,
                success: ''
            });
        default:
            return state
    }
}

