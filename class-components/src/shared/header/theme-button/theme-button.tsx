import { type ReactNode, useContext } from 'react';

import { ThemeContext } from '@/app/providers/theme/theme';

export const ThemeButton = (): ReactNode => {
  const { setTheme, theme } = useContext(ThemeContext);

  const handleClick = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={() => handleClick()}>Theme</button>;
};
