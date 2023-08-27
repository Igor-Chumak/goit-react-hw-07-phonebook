import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store';
import { deleteContact } from 'store/operationsAPI';
import { Delete } from 'components';
import { ContactItem } from './ContactItems.styled';

export const ContactItems = ({ name, number, id }) => {
  const { isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleDelete = itemId => dispatch(deleteContact(itemId));
  return (
    <ContactItem>
      {name} : {number}
      <Delete
        type="button"
        id={id}
        onClick={() => handleDelete(id)}
        disabled={isLoading}
      >
        Delete
      </Delete>
    </ContactItem>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
