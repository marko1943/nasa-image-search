import styles from './SearchPage.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { getImages } from '@/services/getImages';
import { NasaImageType } from '@/types/NasaImage';
import NasaImage from '@/components/NasaImage';
import debounce from 'lodash.debounce';

const SearchPage = () => {
  const [images, setImages] = useState<NasaImageType[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (!searchTerm) {
      setImages([]);
      return;
    }

    getImages(searchTerm, 1991, 2006)
      .then((res) => {
        setImages(res.collection.items);
      })
      .catch((err) => {
        // TODO Add some error mechanism
        console.log(err);
      });
  }, [searchTerm]);

  // Stop search from running when we unmount this component, just in case
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  return (
    <div className={styles.SearchPage}>
      <div className={styles.inputWrapper}>
        <input type="text" onChange={debouncedSearch} />
      </div>

      <div className={styles.imagesWrapper}>
        {images?.map((image: NasaImageType) => (
          <NasaImage image={image} key={image.data[0].nasa_id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
