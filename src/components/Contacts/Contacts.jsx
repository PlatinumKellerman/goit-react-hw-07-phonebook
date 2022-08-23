import { ContactsItem } from './ContactsItem/index';
import { List } from './Contacts.styled';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/actions';
import { deleteContact } from '../../redux/contacts/operations';

export function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          deleteContact={() => dispatch(deleteContact(id))}
          name={name}
          number={number}
        />
      ))}
    </List>
  );
}
