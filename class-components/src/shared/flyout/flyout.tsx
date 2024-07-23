import type { ReactNode } from 'react';

import { clsx } from 'clsx';

import { useAppSelector } from '@/app/hooks/storeHooks';

import { UnselectButton } from './unselect-button/unselect-button';

import classes from './flyout.module.css';

export const Flyout = (): ReactNode => {
  const savedItem = useAppSelector((state) => state.savedItems.data);

  return (
    <div className={clsx(classes.flyout, savedItem.length > 0 ? classes.show : classes.hidden)}>
      <div className={classes.content}>
        <UnselectButton />
        Saved: {savedItem.length}
      </div>
    </div>
  );
};
