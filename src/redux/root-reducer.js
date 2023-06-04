import { combineReducers } from '@reduxjs/toolkit';

import userSlice from './users/user-slice';


export const rootReducer = combineReducers({
  users: userSlice,
  
});