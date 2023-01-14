import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import { rootReducer } from './store/reducers/root-reducer';

import './style/index.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

// eslint-disable-next-line prettier/prettier
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);