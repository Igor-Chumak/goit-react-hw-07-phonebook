import { useDispatch, useSelector } from 'react-redux';
import { selectModeTheme, setModeTheme } from 'store';
import style from './CreateThemeSwitcher.module.css';

export const CreateThemeSwitcher = () => {
  const dispatch = useDispatch();
  const modeTheme = useSelector(selectModeTheme);
  const modeThemeChecked = modeTheme === 'dark' ? true : false;

  const handleToggleTheme = () => {
    dispatch(setModeTheme(modeTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={style.switchBox}>
      {/* <span className={style.themeName}>Night</span> */}
      <label className={style.switch}>
        <input
          type="checkbox"
          onChange={handleToggleTheme}
          checked={!modeThemeChecked}
        />
        <span className={style.slider}></span>
      </label>
      {/* <span className={style.themeName}>Day</span> */}
    </div>
  );
};
