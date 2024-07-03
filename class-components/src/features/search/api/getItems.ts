import { API_KEY, API_URL } from '@/utils/variables';

export const getItems = async <T>(): Promise<T | void> => {
  const response = await fetch(`${API_URL}?page=1&pageSize=5`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data: T) => data)
    .catch((err) => console.error(err));

  return response;
};
