import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import usersReducer from './users/user-slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

export const rootReducer = combineReducers({
  users: persistedUsersReducer,
});