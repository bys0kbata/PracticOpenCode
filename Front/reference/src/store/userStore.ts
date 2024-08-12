import { createStore, createEvent } from 'effector';

interface User{
  isAuth: false,
  name: '',
  email: '',
  role: ''
}

// Хранилище для данных пользователя
const initialUser = {
  isAuth: false,
  name: '',
  email: '',
  role: ''
};
// События для обновления данных пользователя
export const updateUser = createEvent<User>();
export const resetUser = createEvent();

export const $user = createStore(initialUser)
  .on(updateUser, (state, payload) => ({ ...state, ...payload }))
  .reset(resetUser);