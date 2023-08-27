import {
  // Vortex,
  Bars,
} from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
    // <Vortex
    //   visible={true}
    //   height="80"
    //   width="80"
    //   ariaLabel="vortex-loading"
    //   wrapperStyle={{}}
    //   wrapperClass={css.loader}
    //   colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    // />
  );
};
