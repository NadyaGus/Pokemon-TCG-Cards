import type { ReactNode } from 'react';

import { clsx } from 'clsx';

import { useAppSelector } from '@/app/hooks/storeHooks';

import classes from './flyout.module.css';

export const Flyout = (): ReactNode => {
  const savedItem = useAppSelector((state) => state.savedItems.data);

  return (
    <div className={clsx(classes.flyout, savedItem.length > 0 ? classes.show : classes.hidden)}>
      Saved: {savedItem.length}
    </div>
  );
};
