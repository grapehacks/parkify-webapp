import { login, logout, ping, LOGGING_IN, LOGGED_IN, LOGGED_OUT, PING } from '../../../app/redux/actions/authActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('react-router');
jest.useFakeTimers();

const fakeResponse = {user: { username: 'username' }, token: 'token', date: 'date'};
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
            return new Promise((resolve, reject) => {
                credentials.login ? resolve(fakeResponse) : reject(fakeErrorResponse);
            });
        },

        logout: () => {
        },

        ping: () => {
            return new Promise((resolve, reject) => {
                resolve(fakeResponse);
            });
        }
    },
    messagesAPI: {
        getMessages: (credentials) => {
        },
        markAsRead: (id) => {
        }
    }
};
const mockStore = configureMockStore([ thunk.withExtraArgument(mockAPI) ]);


describe('authActions', () => {

    describe('it should login user with valid credentials', () => {
        let store;

        beforeEach(() => {
            store = mockStore({user: {}, token: '', date: ''});
        });

        it('login', () => {

            const credentials = {login: 'loging', password: 'password'};
            const mockResponse = { user: {name: 'name'}, date: 'date'};
            const mockToken = 'mockToken';

            const expectedActions = [
                { type: LOGGING_IN }/*,
                { type: LOGGED_IN, user: mockResponse.user, token: mockToken },
                { type: PING, user: mockResponse.user, date: mockResponse.date }*/
            ];

            //store.dispatch(login(credentials));

            //expect(store.getActions()).toEqual(expectedActions);
                /*.then(() => {

                });*/
        });
    });

    afterEach(() => {
    });

});