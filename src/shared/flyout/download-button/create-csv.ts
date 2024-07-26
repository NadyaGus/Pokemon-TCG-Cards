import type { PokemonTableData } from '@/pages/search-page/results/result-item/result-item.slice';

export const createCSV = (data: PokemonTableData[]): string => {
  const titles = Object.keys(data[0] ?? {});

  const csv = [];
  csv.push(titles);

  data.forEach((item) => {
    csv.push(Object.values(item));
  });

  let csvContent = '';

  csv.forEach((row) => {
    csvContent += row.join(';') + '\r\n';
  });

  return csvContent;
};
