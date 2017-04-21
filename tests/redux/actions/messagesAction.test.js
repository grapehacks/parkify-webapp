import { getMessages, markAsRead, ping, GET_MESSAGES, GOT_MESSAGES, GET_MESSAGES_ERROR, MARKED_AS_READ } from '../../../app/redux/actions/messagesActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('react-router');
jest.useFakeTimers();

const fakeResponse = {data: [{_id: 1, text: 'text'}, {_id: 2, text: 'text2'}]};
const fakeErrorResponse = {response: {data: {message: 'error'}}};
const mockAPI = {
    subscriptionAPI: {
        subscribe: (params) => {

        },

        unsubscribe: (params) => {
        }
    },
    authAPI: {
        login: (credentials) => {
        },

        logout: () => {
        },

        ping: () => {
        }
    },
    messagesAPI: {
        getMessages: (credentials) => {
            return new Promise((resolve, reject) => {
                credentials.login ? resolve(fakeResponse) : reject(fakeErrorResponse);
            });
        },
        markAsRead: (id) => {
            return new Promise((resolve, reject) => {
                id ? resolve(fakeResponse) : reject(fakeErrorResponse);
            });
        }
    }
};
const mockStore = configureMockStore([ thunk.withExtraArgument(mockAPI) ]);


describe('messagesActions', () => {

    describe('getMessages', () => {
        let store;

        beforeEach(() => {
            store = mockStore({user: {}, token: '', date: ''});
        });

        it('it should get messages with correct credentials', () => {

            const credentials = {login: 'loging', password: 'password'};

            const expectedActions = [
                { type: GET_MESSAGES },
                 { type: GOT_MESSAGES, messages: fakeResponse.data }
            ];

           /* store.dispatch(getMessages(credentials));

            expect(store.getActions()).toEqual(expectedActions);*/
        });
    });

    afterEach(() => {
    });

});