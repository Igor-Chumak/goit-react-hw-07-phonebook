import { useDispatch, useSelector } from 'react-redux';
import { SORT_BY, selectSortBy, setSortBy } from 'store';
import {} from '../SortForm/SortForm.styled';

export const SortForm = () => {
  const dispatch = useDispatch();
  const sortby = useSelector(selectSortBy);

  const onChangeSortValue = e => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div aria-label="Basic radio toggle sort type">
      Sort by
      <label>
        None
        <input
          type="radio"
          name="sortby"
          value={SORT_BY.NONE}
          checked={sortby === SORT_BY.NONE}
          onChange={onChangeSortValue}
        />
      </label>
      <label>
        [A...Z]
        <input
          type="radio"
          name="sortby"
          value={SORT_BY.AZ_SORT}
          checked={sortby === SORT_BY.AZ_SORT}
          onChange={onChangeSortValue}
        />
      </label>
      <label>
        [Z...A]
        <input
          type="radio"
          name="sortby"
          value={SORT_BY.ZA_SORT}
          checked={sortby === SORT_BY.ZA_SORT}
          onChange={onChangeSortValue}
        />
      </label>
    </div>
  );
};
