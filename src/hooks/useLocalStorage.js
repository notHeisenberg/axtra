import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Custom hook for managing localStorage state
 * @param {string} key The localStorage key
 * @param {any} initialValue The initial value
 * @returns {[any, Function]} Current value and setter function
 */
export function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

useLocalStorage.propTypes = {
  key: PropTypes.string.isRequired,
  initialValue: PropTypes.any
}; 