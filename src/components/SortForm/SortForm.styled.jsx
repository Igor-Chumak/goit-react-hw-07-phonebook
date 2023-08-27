import styled from 'styled-components';

export const SortWrapper = styled.div`
  /* display: block; */
  /* position: relative; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  /* max-width: ${props => props.theme.spacing(80)}; */
  padding-bottom: ${props => props.theme.spacing(2)};
  /* padding-left: ${props => props.theme.spacing(5)}; */
  /* padding-right: ${props => props.theme.spacing(5)}; */
  /* font-weight: 600; */
  /* line-height: 1.5; */
  text-align: center;
  /* outline: 1px solid red; */
`;

export const SortLabelBox = styled.div`
  /* display: block; */
  /* position: relative; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  /* max-width: ${props => props.theme.spacing(80)}; */
  /* padding-bottom: ${props => props.theme.spacing(2)}; */
  /* padding-left: ${props => props.theme.spacing(5)}; */
  /* padding-right: ${props => props.theme.spacing(5)}; */
  /* font-weight: 600; */
  /* line-height: 1.5; */
  /* outline: 1px solid yellow; */
`;

export const SortLabel = styled.label`
  display: inline-block;
  /* position: relative; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* margin-bottom: ${props => props.theme.spacing(3)}; */
  /* max-width: ${props => props.theme.spacing(80)}; */
  padding: ${props => props.theme.spacing(2)};
  /* padding-bottom: ${props => props.theme.spacing(2)}; */
  /* padding-left: ${props => props.theme.spacing(5)}; */
  /* padding-right: ${props => props.theme.spacing(5)}; */
  color: ${props => props.theme.colors.gray};
  /* font-weight: 600; */
  font-size: ${props => props.theme.fontSizes.small};
  /* line-height: 1.5; */
  cursor: pointer;
  border-radius: 6px;
  box-shadow: ${props => props.theme.shadows.small};
  /* outline: 1px solid green; */

  input:checked + & {
    background-color: ${props => props.theme.colors.white};
    color: initial;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const SortInput = styled.input`
  display: none;
`;
