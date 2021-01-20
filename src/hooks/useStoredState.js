import { useState, useEffect } from 'react';

export const useStoredState = (defaultValue, key) => {
   const [value, setValue] = useState(() => {
      const storedValue = window.localStorage.getItem(key);

      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
   });

   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
   }, [key, value]);

   return [value, setValue];
};
