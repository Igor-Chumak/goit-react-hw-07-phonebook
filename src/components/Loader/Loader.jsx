import {
  // MagnifyingGlass,
  Vortex,
} from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    // <MagnifyingGlass
    //   visible={true}
    //   height="80"
    //   width="80"
    //   ariaLabel="MagnifyingGlass-loading"
    //   wrapperStyle={{}}
    //   wrapperClass={css.loader}
    //   glassColor="rgba(228, 228, 228, 0.1)"
    //   color="red"
    // />
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
  );
};
