import { NasaImageType } from "@/types/NasaImage";

// Each search result item should include a thumbnail, title, location, and photographer's
// name.

import styles from "./NasaImage.module.scss";
import { Link } from "react-router-dom";

const NasaImage = ({ image }: { image: NasaImageType }) => {
  return (
    <div className={styles.NasaImage}>
      <p>{image.data[0].title || ""}</p>
      <p>{image.data[0].secondary_creator || ""} </p>
      <p> {image.data[0].location || ""}</p>
      {image.links && (
        <Link to={`/${image.data[0].nasa_id}`} state={image}>
          <img src={image.links[0].href} alt={image.data[0].description_508} />
        </Link>
      )}
    </div>
  );
};

export default NasaImage;
