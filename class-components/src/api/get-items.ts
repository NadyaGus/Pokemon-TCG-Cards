import { API_KEY, API_URL } from '@/utils/variables';

export interface Pokemon {
  id: string;
  images: { small: string };
  name: string;
  set: {
    name: string;
    series: string;
  };
}

export interface ResponseData {
  data: Pokemon[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export const getItems = async (value: string, page = 1): Promise<ResponseData | void> => {
  const response = await fetch(`${API_URL}?page=${page}&pageSize=20&q=name:${value}*`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data: ResponseData) => data)
    .catch((err) => console.error(err));

  return response;
};
