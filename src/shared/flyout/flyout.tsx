import type { ReactNode } from 'react';

import { clsx } from 'clsx';

import { useAppSelector } from '@/app/hooks/storeHooks';

import { DownloadButton } from './download-button/download-button';
import { UnselectButton } from './unselect-button/unselect-button';

import classes from './flyout.module.css';

export const Flyout = (): ReactNode => {
  const savedItem = useAppSelector((state) => state.savedItems.data);

  return (
    <div className={clsx(classes.flyout, savedItem.length > 0 ? classes.show : classes.hidden)}>
      <div className={classes.content}>
        <UnselectButton />
        <div className={classes.wrapper}> Saved: {savedItem.length}</div>
        <DownloadButton />
      </div>
    </div>
  );
};
