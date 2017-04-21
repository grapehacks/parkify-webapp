import 'babel-polyfill'; //required for yield

import { fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import messagesSaga from './messagesSaga';
import subscribeSaga from './subscribeSaga';
import accountSaga from './accountSaga';
import historySaga from './historySaga';
import manageUsersSaga from './manageUsersSaga';
import manageCardsSaga from './manageCardsSaga';

export default function* rootSaga() {
    yield* [
        fork(authSaga),
        fork(messagesSaga),
        fork(subscribeSaga),
        fork(accountSaga),
        fork(historySaga),
        fork(manageUsersSaga),
        fork(manageCardsSaga)
    ];
}
