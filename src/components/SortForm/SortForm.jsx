import { useDispatch, useSelector } from 'react-redux';
import { SORT_BY, selectSortBy, setSortBy } from 'store';
import { SortLabel, SortInput, SortWrapper } from '../SortForm/SortForm.styled';

export const SortForm = () => {
  const dispatch = useDispatch();
  const sortby = useSelector(selectSortBy);

  const onChangeSortValue = e => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <SortWrapper aria-label="Basic radio toggle sort type">
      Sort by
      <SortLabel>
        None
        <SortInput
          type="radio"
          name="sortby"
          value={SORT_BY.NONE}
          checked={sortby === SORT_BY.NONE}
          onChange={onChangeSortValue}
        />
      </SortLabel>
      <SortLabel>
        [A...Z]
        <SortInput
          type="radio"
          name="sortby"
          value={SORT_BY.AZ_SORT}
          checked={sortby === SORT_BY.AZ_SORT}
          onChange={onChangeSortValue}
        />
      </SortLabel>
      <SortLabel>
        [Z...A]
        <SortInput
          type="radio"
          name="sortby"
          value={SORT_BY.ZA_SORT}
          checked={sortby === SORT_BY.ZA_SORT}
          onChange={onChangeSortValue}
        />
      </SortLabel>
    </SortWrapper>
  );
};
