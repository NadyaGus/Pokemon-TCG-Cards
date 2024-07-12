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

export interface ResponseDataCard {
  data: Pokemon;
}

export const getItemsList = async (value: string, query: string): Promise<ResponseData | void> => {
  const response = await fetch(`${API_URL}${query}&q=name:${value}*`, {
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

export const getItem = async (value: string): Promise<ResponseDataCard | void> => {
  const response = await fetch(`${API_URL}/${value}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data: ResponseDataCard) => data)
    .catch((err) => console.error(err));

  return response;
};
