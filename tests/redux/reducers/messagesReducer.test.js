import authReducer from '../../../app/redux/reducers/messagesReducer';
import {GET_MESSAGES, GOT_MESSAGES, GET_MESSAGES_ERROR, MARKED_AS_READ} from '../../../app/redux/actions/actionTypes'

describe('messagesReducer', () => {

    it('should return default/initial state when action type is invalid', () => {
        const expected = {
            messages: [],
            gettingMessages: false,
            error: ''
        };

        const res = authReducer(expected, {type: 'strangetype'});
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type GET_MESSAGES', () => {
        const state = { someProp: 'asdf'};
        const action = { type: GET_MESSAGES, someProp2: 'asdf'};
        const expected = {someProp: 'asdf', gettingMessages: true, error: ''};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type GOT_MESSAGES', () => {
        const state = { someProp: 'asdf'};
        const action = { type: GOT_MESSAGES, someProp2: 'asdf', messages: ['message1']};
        const expected = {someProp: 'asdf', gettingMessages: false, messages: action.messages, error: ''};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type GET_MESSAGES_ERROR', () => {
        const state = { someProp: 'asdf'};
        const action = { type: GET_MESSAGES_ERROR, someProp2: 'asdf'};
        const expected = {someProp: 'asdf', gettingMessages: false, error: ''};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return correct object for action type MARKED_AS_READ', () => {
        const state = { someProp: 'asdf', messages: [{_id: 1, text: 'text1'}, {_id: 2, text: 'text2'}, {_id: 3, text: 'text3'}]};
        const action = { type: MARKED_AS_READ, someProp2: 'asdf', message: {_id: 2, text: 'textNew'}};
        const expected = {someProp: 'asdf', messages: [{_id: 1, text: 'text1'}, {_id: 2, text: 'textNew'}, {_id: 3, text: 'text3'}]};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });
});