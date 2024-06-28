// src/store/userStore.js

import { createStore, createEvent } from 'effector';

export const setUser = createEvent();
export const clearUser = createEvent();

const initialState = {
    name: '',
    email: '',
};

export const userStore = createStore(initialState)
    .on(setUser, (state, payload) => ({
        ...state,
        ...payload,
    }))
    .reset(clearUser);