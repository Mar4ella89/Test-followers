import { createSlice } from '@reduxjs/toolkit';

import { fetchAllUsers } from './user-operations';
  

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllUsers.pending, store => {
        store.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchAllUsers.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      
  },
});

export default usersSlice.reducer;