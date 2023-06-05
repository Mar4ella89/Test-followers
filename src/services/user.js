import axios from 'axios';

const usersInstance = axios.create({
  baseURL: 'https://647c9e5dc0bae2880ad0f880.mockapi.io/api/users',
});

export const fetchUsers = async page => {
  const { data } = await usersInstance.get(`/?page=${page}`);
  return data;
};

export const updateFollowers = async (id, { followers }) => {
  await usersInstance.put(`/${id}`, { followers });
};
