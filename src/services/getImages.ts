import { API_URL } from '@/constants/API';

export async function getImages(
  query: string,
  startYear: number,
  endYear: number
) {
  const response = await fetch(
    API_URL +
      'search' +
      `?q=${query}` +
      `&year_start=${startYear}` +
      `&year_end=${endYear}` +
      `&page_size=10`
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
