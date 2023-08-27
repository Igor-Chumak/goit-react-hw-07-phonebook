import { useDispatch, useSelector } from 'react-redux';
import { SORT_BY, selectSortBy, setSortBy } from 'store';
import {
  SortLabel,
  SortInput,
  SortWrapper,
  SortLabelBox,
} from '../SortForm/SortForm.styled';

export const SortForm = () => {
  const dispatch = useDispatch();
  const sortby = useSelector(selectSortBy);

  const onChangeSortValue = e => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <SortWrapper aria-label="Basic radio toggle sort type">
      Sort by
      <SortLabelBox>
        <SortInput
          type="radio"
          name="sortby"
          id="sortbynone"
          value={SORT_BY.NONE}
          checked={sortby === SORT_BY.NONE}
          onChange={onChangeSortValue}
        />
        <SortLabel htmlFor="sortbynone">None</SortLabel>
        <SortInput
          type="radio"
          name="sortby"
          id="sortbyaz"
          value={SORT_BY.AZ_SORT}
          checked={sortby === SORT_BY.AZ_SORT}
          onChange={onChangeSortValue}
        />
        <SortLabel htmlFor="sortbyaz">[A...Z]</SortLabel>
        <SortInput
          type="radio"
          name="sortby"
          id="sortbyza"
          value={SORT_BY.ZA_SORT}
          checked={sortby === SORT_BY.ZA_SORT}
          onChange={onChangeSortValue}
        />
        <SortLabel htmlFor="sortbyza">[Z...A]</SortLabel>
      </SortLabelBox>
    </SortWrapper>
  );
};
