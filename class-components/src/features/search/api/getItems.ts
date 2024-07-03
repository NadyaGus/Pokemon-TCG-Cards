import { API_KEY, API_URL } from '@/utils/variables';

export interface Pokemon {
  images: { small: string };
  name: string;
}

export interface ResponseData {
  data: Pokemon[];
}
export const getItems = async (): Promise<ResponseData | void> => {
  const response = await fetch(`${API_URL}?page=1&pageSize=5`, {
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
