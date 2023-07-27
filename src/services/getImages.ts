import { API_URL } from '@/constants/API';

export async function getImages(query: string, size: number = 10) {
  const response = await fetch(
    API_URL + 'search' + `?q=${query}` + `&page_size=${size}`
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
