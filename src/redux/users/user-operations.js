import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUsers } from 'services/user';

export const fetchAllUsers = createAsyncThunk(
  'users/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await fetchUsers();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);