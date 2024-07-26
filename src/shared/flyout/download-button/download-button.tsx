import type { ReactNode } from 'react';

import { useAppSelector } from '@/app/hooks/storeHooks';

import { createCSV } from './create-csv';

export const DownloadButton = (): ReactNode => {
  const data = useAppSelector((state) => state.savedItems.data);

  const downloadCSV = (): string => {
    const csvContent = createCSV(data);

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    return url;
  };

  return (
    <a download={'data.csv'} href={downloadCSV()}>
      <button onClick={() => downloadCSV()}>Download</button>
    </a>
  );
};
