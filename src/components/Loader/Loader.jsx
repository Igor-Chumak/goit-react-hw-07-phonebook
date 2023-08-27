import { ScaleLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ScaleLoader color="rgba(100, 54, 214, 1)" />
    </LoaderWrapper>
  );
};
