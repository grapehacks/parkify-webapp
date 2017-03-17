import 'babel-polyfill'; //required for yield

import { fork } from 'redux-saga/effects';
import authSaga from './authSaga';
//import messagesSaga from './messagesSaga';
//import subscribeSaga from './subscribeSaga';

export default function* rootSaga() {
    yield* [
        fork(authSaga),
        //fork(messagesSaga),
        //fork(subscribeSaga)
    ];
}
