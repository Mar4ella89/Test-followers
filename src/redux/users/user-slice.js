import { createSlice } from '@reduxjs/toolkit';
import { updateFollowers } from 'services/user';

import { fetchAllUsers, toggleFollow } from './user-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  followStatus: {},
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
      .addCase(toggleFollow.fulfilled, (state, { payload }) => {
        const userIndex = state.items.findIndex(user => user.id === payload.id);
        if (userIndex !== -1) {
          const user = state.items[userIndex];
          if (state.followStatus[user.id]) {
            user.followers = user.followers - 1;
            delete state.followStatus[user.id];
          } else {
            user.followers = user.followers + 1;
            state.followStatus[user.id] = true;
          }
          updateFollowers(user.id, { followers: user.followers });
        }
      });
  },
});

export default usersSlice.reducer;
