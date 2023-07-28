import { NasaImageType } from '@/types/NasaImage';

import styles from './NasaImage.module.scss';

const NasaImage = ({ image }: { image: NasaImageType }) => {
  return (
    <div className={styles.NasaImage}>
      <img src={image.links[0].href} alt={image.data[0].description_508} />
    </div>
  );
};

export default NasaImage;
