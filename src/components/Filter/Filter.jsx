import { useDispatch, useSelector } from 'react-redux';
import { Clear } from 'components';
import { setFilter, selectFilter } from 'store';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleChangeInputFilter = filter => dispatch(setFilter(filter));

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        maxLength="22"
        placeholder=""
        id="filter"
        autoFocus
        value={filter}
        onChange={e => handleChangeInputFilter(e.target.value.toLowerCase())}
      />
      <Clear type="button" onClick={() => handleChangeInputFilter('')}>
        Clear
      </Clear>
    </FilterLabel>
  );
};
