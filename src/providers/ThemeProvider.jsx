import PropTypes from 'prop-types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ThemeContext } from '../contexts/theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; 