import { useSelector } from 'react-redux';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';
import { selectVisibleContacts } from 'store';

export const ContactList = () => {
  const contactsToList = useSelector(selectVisibleContacts);

  return (
    <ContactListBox>
      {contactsToList.map(({ id, name, number }) => (
        <ContactItems name={name} number={number} id={id} key={id} />
      ))}
    </ContactListBox>
  );
};
