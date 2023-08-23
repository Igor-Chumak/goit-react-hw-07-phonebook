import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const contactsToList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactListBox>
      {contactsToList.map(({ id, name, number }) => (
        <ContactItems name={name} number={number} id={id} key={id} />
      ))}
    </ContactListBox>
  );
};
