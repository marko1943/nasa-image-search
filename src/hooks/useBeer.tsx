import { getBeers } from '@/services/beerService';
import { Beer } from '@/types/Beer';
import { useState, useEffect } from 'react';

const useBeer = () => {
  const [beerData, setBeerData] = useState<Beer[]>([]);

  async function getBeerData() {
    const beers: Beer[] = await getBeers(10);
    setBeerData(beers);
  }

  useEffect(() => {
    getBeerData();
  }, []);

  return beerData;
};

export default useBeer;
