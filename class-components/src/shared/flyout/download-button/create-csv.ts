import type { Pokemon } from '@/app/api/types';

export const createCSV = (data: Pokemon[]): string => {
  const titles = Object.keys(data[0] ?? {});

  const csv = [];
  csv.push(titles);

  data.forEach((item) => {
    csv.push(Object.values(item));
  });

  let csvContent = '';

  csv.forEach((row) => {
    csvContent += row.join(';') + '\n';
  });

  return csvContent;
};
