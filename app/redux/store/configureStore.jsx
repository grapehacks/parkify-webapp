import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer'
import rootSaga from '../sagas/rootSaga'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return Object.assign({runSaga: sagaMiddleware.run(rootSaga)}, ...createStore(rootReducer, applyMiddleware(sagaMiddleware)));
};

export default configureStore;