import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

/**
 * Custom hook to access theme context
 * @returns {Object} Theme context value
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 