import { FcPhoneAndroid } from 'react-icons/fc';
import { ListItem, ItemName, DeleteButton } from './ContactsItem.styled';

export function ContactsItem({ delContact, name, number }) {
  return (
    <ListItem>
      <ItemName>
        <FcPhoneAndroid size="20" />
        {name}:
      </ItemName>
      <p>{number}</p>
      <DeleteButton onClick={delContact}>Delete</DeleteButton>
    </ListItem>
  );
}
