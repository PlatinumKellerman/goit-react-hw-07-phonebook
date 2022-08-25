import { FcPhoneAndroid } from 'react-icons/fc';
import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export function ContactsItem({ delContact, name, number }) {
  return (
    <ListItem>
      <ItemName>
        <FcPhoneAndroid size="20" />
        {name}:
      </ItemName>
      <ItemNumber>{number}</ItemNumber>
      <DeleteButton onClick={delContact}>Delete</DeleteButton>
    </ListItem>
  );
}
