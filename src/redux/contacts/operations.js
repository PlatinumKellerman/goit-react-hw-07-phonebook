import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/api';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsAPI.getContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await contactsAPI.addContact(contact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(contactId);
      return await contactsAPI.getContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
