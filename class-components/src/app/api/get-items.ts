// import { API_KEY, API_URL } from '@/shared/variables';

// import type { ResponseDataCard } from './types';

// export const getItemsList = async (query: QueryString): Promise<ResponseData | void> => {
//   const response = await fetch(`${API_URL}?page=${query.page}&pageSize=${query.pageSize}&q=name:${query.search}*`, {
//     headers: {
//       'X-Api-Key': API_KEY,
//     },
//     method: 'GET',
//   })
//     .then((response) => response.json())
//     .then((data: ResponseData) => data)
//     .catch((err) => console.error(err));

//   return response;
// };

// export const getItem = async (value: string): Promise<ResponseDataCard | void> => {
//   const response = await fetch(`${API_URL}/${value}`, {
//     headers: {
//       'X-Api-Key': API_KEY,
//     },
//     method: 'GET',
//   })
//     .then((response) => response.json())
//     .then((data: ResponseDataCard) => data)
//     .catch((err) => console.error(err));

//   return response;
// };
