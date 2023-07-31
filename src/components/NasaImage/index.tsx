import { NasaImageType } from "@/types/NasaImage";

// Each search result item should include a thumbnail, title, location, and photographer's
// name.

import styles from "./NasaImage.module.scss";

const NasaImage = ({ image }: { image: NasaImageType }) => {
  return (
    <div className={styles.NasaImage}>
      <p>{image.data[0].title || ""}</p>
      <p>{image.data[0].secondary_creator || ""} </p>
      <p> {image.data[0].location || ""}</p>
      {image.links && (
        <img src={image.links[0].href} alt={image.data[0].description_508} />
      )}
    </div>
  );
};

export default NasaImage;
