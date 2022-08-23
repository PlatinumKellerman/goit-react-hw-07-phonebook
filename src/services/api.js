import axios from 'axios';
axios.defaults.baseURL = '630514a3697408f7edc16d5f.mockapi.io/';

export const addContact = async values => {
  const response = await axios.post('/contacts', values);
  return response.data;
};

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export const getContactById = async id => {
  const response = await axios.get(`/contacts/${id}`);
  return response.data;
};
