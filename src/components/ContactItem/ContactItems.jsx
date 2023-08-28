import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { api, selectIsLoading } from 'store';
import { Delete } from 'components';
import { ContactItem } from './ContactItems.styled';

export const ContactItems = ({ name, number, id }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const handleDelete = itemId => dispatch(api.deleteContactThunk(itemId));
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
