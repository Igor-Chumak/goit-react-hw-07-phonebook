import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notification } from 'components';
import { api, selectContacts, selectIsLoading } from 'store';
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormSubmit,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [notification, setNotification] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const searchContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || number === '') return;
    const searchResult = searchContact(name);
    if (searchResult)
      return setNotification(
        `${searchResult.name} : ${searchResult.number} is already in contacts`
      );
    dispatch(api.addContactThunk({ name, number }));
    e.currentTarget.reset();
    setName('');
    setNumber('');
  };

  return (
    <>
      <ContactFormForm onSubmit={handleSubmit}>
        <ContactFormLabel>
          Name
          <ContactFormInput
            type="text"
            name="name"
            minLength="2"
            maxLength="22"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=""
            required
            value={name}
            onChange={e => setName(e.target.value.trim())}
          />
        </ContactFormLabel>
        <ContactFormLabel>
          Number
          <ContactFormInput
            type="tel"
            name="number"
            minLength="7"
            maxLength="17"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=""
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </ContactFormLabel>
        <ContactFormSubmit type="submit" disabled={isLoading}>
          Add contact
        </ContactFormSubmit>
      </ContactFormForm>
      {notification && (
        <Notification
          setNotification={setNotification}
          message={notification}
        />
      )}
    </>
  );
};
