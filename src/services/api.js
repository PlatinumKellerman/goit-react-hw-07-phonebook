import axios from 'axios';
axios.defaults.baseURL = 'https://630514a3697408f7edc16d5f.mockapi.io';

export const addContact = async contact => {
  const response = await axios.post('/contacts', contact);
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
