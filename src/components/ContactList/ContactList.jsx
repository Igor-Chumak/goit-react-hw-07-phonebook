import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api, selectContacts, selectVisibleContacts } from 'store';
import { ContactItems, Loader } from 'components';
import { ContactListBox } from './ContactList.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  width: '500px',
  fontSize: '25px',
  position: 'center-top',
  timeout: '2000',
  messageMaxLength: 150,
  distance: '20px',
  showOnlyTheLastOne: true,
  clickToClose: true,
  closeButton: true,
  opacity: 1,
  warning: {
    background: '#df120b',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0, 0, 0, 0.466)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,1)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsToList = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(selectContacts);
  useEffect(() => {
    dispatch(api.getQuery());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && Notify.warning(error)};
      <ContactListBox>
        {contactsToList.map(contact => (
          <ContactItems {...contact} key={contact.id} />
        ))}
      </ContactListBox>
    </>
  );
};
