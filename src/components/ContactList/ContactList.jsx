import { useSelector } from 'react-redux';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';
import { selectVisibleContacts } from 'store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { api } from 'store';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsToList = useSelector(selectVisibleContacts);
  useEffect(() => {
    dispatch(api.getQuery('1'));
  }, [dispatch]);

  return (
    <ContactListBox>
      {contactsToList.map(contact => (
        <ContactItems {...contact} key={contact.id} />
      ))}
    </ContactListBox>
  );
};
