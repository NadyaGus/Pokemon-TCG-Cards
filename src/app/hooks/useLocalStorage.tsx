import { useEffect, useState } from 'react';

import { LS_KEY_SEARCH } from '@/app/variables';

const initialValue = (): string => {
  return localStorage.getItem(LS_KEY_SEARCH) ?? '';
};

export const useLocalStorage = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue());

  useEffect(() => {
    localStorage.setItem(LS_KEY_SEARCH, value);
  }, [value]);

  return [value, setValue];
};
