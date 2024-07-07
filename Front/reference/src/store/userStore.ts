import { createStore, createEvent } from 'effector';

// События для обновления данных пользователя
export const updateUser = createEvent();
export const resetUser = createEvent();

// Хранилище для данных пользователя
const initialUser = {
  isAuth: false,
  name: '',
  email: '',
};

export const $user = createStore(initialUser)
  .on(updateUser, (state, payload) => ({ ...state, ...payload }))
  .reset(resetUser);