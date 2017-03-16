import ReactDOM from 'react-dom';
/* eslint-disable */
import React from 'react';
import styles from './style.scss';
/* eslint-enable */
import routes from './config/routes.jsx';
import { Provider } from 'react-redux'
import configureStore  from './redux/store/configureStore';

const store = configureStore();
const App = () => (
    <Provider store={store}>
        {routes}
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));