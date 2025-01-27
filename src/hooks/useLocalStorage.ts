import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((val: T) => T)) => Promise<void>;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        // Use optional chaining to check for window and localStorage
        if (window?.localStorage) {
          const item = window.localStorage.getItem(key);
          setStoredValue(item ? JSON.parse(item) : initialValue);
        } else {
          // For React Native
          const item = await AsyncStorage.getItem(key);
          setStoredValue(item ? JSON.parse(item) : initialValue);
        }
      } catch (error) {
        console.error('Error reading local storage:', error);
      }
    };

    loadStoredValue();
  }, [key, initialValue]);

  const setValue: SetValue<T> = async value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      // Use optional chaining to check for window and localStorage
      if (window?.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error setting local storage:', error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
