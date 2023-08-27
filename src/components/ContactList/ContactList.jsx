import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api, selectVisibleContacts } from 'store';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsToList = useSelector(selectVisibleContacts);
  useEffect(() => {
    dispatch(api.getContacts());
  }, [dispatch]);

  return (
    <ContactListBox>
      {contactsToList.map(contact => (
        <ContactItems {...contact} key={contact.id} />
      ))}
    </ContactListBox>
  );
};
