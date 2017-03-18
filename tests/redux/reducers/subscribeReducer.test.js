import authReducer from '../../../app/redux/reducers/subscribeReducer';
import {SUBSCRIBE_SUCCESS, UNSUBSCRIBE_SUCCESS, PROCESS, FAILED} from '../../../app/redux/actions/actionTypes'

describe('subscribeReducer', () => {

    it('should return default/initial state', () => {
        const expected = {
            subscribed: false,
            processing: false
        };

        const res = authReducer();
        expect(res).toEqual(expected);
    });

    it('should return default/initial state when action type is invalid', () => {
        const expected = {
            subscribed: false,
            processing: false
        };

        const res = authReducer(expected, {type: 'strangetype'});
        expect(res).toEqual(expected);
    });

    it('should return subscribe object for action type SUBSCRIBE_SUCCESS', () => {
        const state = { someProp: 'asdf'};
        const action = { type: SUBSCRIBE_SUCCESS, someProp2: 'asdf'};
        const expected = {someProp: 'asdf', subscribed: true, processing: false};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return process object for action type PROCESS', () => {
        const state = { someProp: 'asdf'};
        const action = { type: PROCESS, someProp2: 'asdf'};
        const expected = {someProp: 'asdf', processing: true};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return unsubscribe object for action type UNSUBSCRIBE_SUCCESS', () => {
        const state = { someProp: 'asdf'};
        const action = { type: UNSUBSCRIBE_SUCCESS, someProp2: 'asdf'};
        const expected = {someProp: 'asdf', subscribed: false, processing: false};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return failed object for action type FAILED', () => {
        const state = { someProp: 'asdf'};
        const action = { type: FAILED, payload: {error: 'error'}};
        const expected = {someProp: 'asdf', error: 'error'};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });
});