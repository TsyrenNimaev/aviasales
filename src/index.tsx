import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import transferReducer from './redux/transfer-reducer';
import App from './components/App/App';

import './index.scss';

const rootReducer = combineReducers({ transferReducer })

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  // eslint-disable-next-line prettier/prettier
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);