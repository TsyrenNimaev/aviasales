import { combineReducers } from 'redux';

import transferReducer from './transfer-reducer';
import ticketReducer from './tickets-reducer';
import tabsReducer from './tabs-reducer';

export const rootReducer = combineReducers({ transferReducer, ticketReducer, tabsReducer });

export type RootState = ReturnType<typeof rootReducer>;
