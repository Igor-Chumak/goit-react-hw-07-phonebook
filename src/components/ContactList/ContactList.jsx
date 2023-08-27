import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api, selectVisibleContacts } from 'store';
import { ContactItems } from 'components';
import { ContactListBox, ContactListNoItems } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsToList = useSelector(selectVisibleContacts);
  useEffect(() => {
    dispatch(api.getContactsThunk());
  }, [dispatch]);

  return (
    <ContactListBox>
      {contactsToList.length === 0 && (
        <ContactListNoItems>
          There are no contacts for your search terms
        </ContactListNoItems>
      )}
      {contactsToList.map(contact => (
        <ContactItems {...contact} key={contact.id} />
      ))}
    </ContactListBox>
  );
};
