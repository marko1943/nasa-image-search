import styles from './SearchPage.module.scss';
import { useEffect, useState } from 'react';
import { getImages } from '@/services/getImages';

const SearchPage = () => {
  const [, setImages] = useState();

  useEffect(() => {
    getImages('moon')
      .then((res) => {
        console.log(res);
        setImages(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.SearchPage}>
      <h1>Hello, I'm a search page.</h1>
    </div>
  );
};

export default SearchPage;
