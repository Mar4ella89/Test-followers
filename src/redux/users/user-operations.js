import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUsers, updateFollowers } from 'services/user';

export const fetchAllUsers = createAsyncThunk(
  'users/fetch-all',
  async (page, thunkAPI) => {
    try {
      const data = await fetchUsers(page);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const toggleFollow = createAsyncThunk(
  'users/toggle-follow',
  async ({ id, followers }, thunkAPI) => {
    try {
      const isFollowing = followers > 0;
      const updatedFollowers = isFollowing ? followers - 1 : followers + 1;
      await updateFollowers(id, { followers: updatedFollowers });
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
