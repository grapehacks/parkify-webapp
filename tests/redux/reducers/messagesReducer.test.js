import messagesReducer from '../../../app/redux/reducers/messagesReducer';
import {GET_MESSAGES_START, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILED, MARKED_AS_READ, MARK_AS_READ_FAILED} from '../../../app/redux/actions/actionTypes'

describe('messagesReducer', () => {

    it('should return default/initial state', () => {
        const expected = {
            messages: [],
            gettingMessages: false,
            error: ''
        };

        const res = messagesReducer();
        expect(res).toEqual(expected);
    });

    it('should return default/initial state when action type is invalid', () => {
        const expected = {
            messages: [],
            gettingMessages: false,
            error: ''
        };

        const res = messagesReducer(expected, {type: 'strangetype'});
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type GET_MESSAGES_START', () => {
        const state = { someProp: 'asdf'};
        const action = { type: GET_MESSAGES_START, someProp2: 'asdf'};
        const expected = {someProp: 'asdf', gettingMessages: true, error: ''};
        const res = messagesReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type GET_MESSAGES_SUCCESS', () => {
        const state = { someProp: 'asdf'};
        const action = { type: GET_MESSAGES_SUCCESS, someProp2: 'asdf', payload: {messages: ['message1']}};
        const expected = {someProp: 'asdf', gettingMessages: false, messages: action.payload.messages, error: ''};
        const res = messagesReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type GET_MESSAGES_FAILED', () => {
        const state = { someProp: 'asdf'};
        const action = { type: GET_MESSAGES_FAILED, someProp2: 'asdf', payload: {error: 'error'}};
        const expected = {someProp: 'asdf', gettingMessages: false, error: 'error'};
        const res = messagesReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type MARKED_AS_READ', () => {
        const state = { someProp: 'asdf', messages: [{_id: 1, text: 'text1'}, {_id: 2, text: 'text2'}, {_id: 3, text: 'text3'}]};
        const action = { type: MARKED_AS_READ, someProp2: 'asdf', payload: {message: {_id: 2, text: 'textNew'}}};
        const expected = {someProp: 'asdf', messages: [{_id: 1, text: 'text1'}, {_id: 2, text: 'textNew'}, {_id: 3, text: 'text3'}]};
        const res = messagesReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type MARK_AS_READ_FAILED', () => {
        const state = { someProp: 'asdf' };
        const action = { type: MARK_AS_READ_FAILED, payload: {error: 'error'}};
        const expected = {someProp: 'asdf', error: 'error'};
        const res = messagesReducer(state, action);
        expect(res).toEqual(expected);
    });
});