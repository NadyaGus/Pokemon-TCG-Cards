import type { ReactNode } from 'react';

import { useAppDispatch } from '@/app/hooks/storeHooks';
import { savedItemSlice } from '@/pages/search-page/results/result-item/result-item.slice';

export const UnselectButton = (): ReactNode => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(savedItemSlice.actions.unselectAll());
  };

  return <button onClick={() => handleClick()}>Unselect</button>;
};
