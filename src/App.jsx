import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from './redux/contacts/operations';
import { Container } from './components/Container/index';
import { PhonebookForm } from './components/PhonebookForm/index';
import { Contacts } from 'components/Contacts/index';
import { Filter } from './components/Filter/index';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm title="Phonebook" />
      <Filter title="Find contacts by name:" />
      <h2>Contacts</h2>
      <Contacts title="Contacts" />
    </Container>
  );
}