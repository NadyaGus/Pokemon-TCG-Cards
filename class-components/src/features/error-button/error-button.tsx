import type { ReactNode } from 'react';
import { useState } from 'react';

export const ErrorButton = (): ReactNode => {
  const [hasError, setHasError] = useState(false);

  const handleClick = (): void => {
    setHasError(true);
  };

  if (hasError) {
    throw (new Error('Something went wrong.').name = 'Error Boundary Test');
  }

  return <button onClick={() => handleClick()}>Throw Error</button>;
};
