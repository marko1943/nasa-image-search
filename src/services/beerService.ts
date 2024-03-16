import { API_URL } from '@/constants/API';
import { Beer } from '@/types/Beer';

export async function getBeers(size: number): Promise<Beer[]> {
  const response = await fetch(API_URL + `?size=${size}`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}
