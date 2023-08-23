import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { selectModeTheme } from 'store';

const DarkThemeProvider = ({ children }) => {
  const modeTheme = useSelector(selectModeTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...(modeTheme === 'dark' ? darkTheme : lightTheme),
      }}
    >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
