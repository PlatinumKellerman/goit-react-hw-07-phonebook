import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/api';
import { toast } from 'react-toastify';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      toast.success(`Contact added successfully`);
      return await contactsAPI.addContact(contact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      toast.success(`Contact deleted successfully`);
      await contactsAPI.deleteContact(contactId);
      return await contactsAPI.getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
