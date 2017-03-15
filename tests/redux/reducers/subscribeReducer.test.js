import authReducer from '../../../app/redux/reducers/subscribeReducer';
import {SUBSCRIBE, UNSUBSCRIBE, PROCESS} from '../../../app/redux/actions/subscribeActions'

describe('subscribeReducer', () => {

    it('should return default/initial state when action type is invalid', () => {
        const expected = {
            subscribed: false,
            processing: false
        };

        const res = authReducer(expected, {type: 'strangetype'});
        expect(res).toEqual(expected);
    });

    it('should return subscribe object for action type SUBSCRIBE', () => {
        const state = { someProp: 'asdf'};
        const action = { type: SUBSCRIBE, someProp2: 'asdf'};
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

    it('should return unsubscribe object for action type UNSUBSCRIBE', () => {
        const state = { someProp: 'asdf'};
        const action = { type: UNSUBSCRIBE, someProp2: 'asdf'};
        const expected = {someProp: 'asdf', subscribed: false, processing: false};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });
});