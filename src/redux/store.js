import { configureStore } from '@reduxjs/toolkit';
import { middleware } from 'redux/storeConfig/middleware';
import contactsReducer from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});
