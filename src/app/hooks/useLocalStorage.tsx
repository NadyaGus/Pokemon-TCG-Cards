import { useEffect, useState } from 'react';

import { LS_KEY } from '@/app/variables';

export const useLocalStorage = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState(localStorage.getItem(LS_KEY) ?? '');

  useEffect(() => {
    localStorage.setItem(LS_KEY, value);
  }, [value]);

  return [value, setValue];
};
