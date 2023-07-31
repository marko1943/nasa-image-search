import { useEffect, useState } from "react";
import styles from "./ShowPage.module.scss";
import { Link, useLocation, useParams } from "react-router-dom";

import { NasaImageType } from "@/types/NasaImage";
import { getAsset } from "@/services/getAsset";

type CollectionItem = {
  href: string;
};

const ShowPage = () => {
  const { id } = useParams();
  const [image, setImage] = useState<NasaImageType>();
  const [error, setError] = useState("");
  const [collection, setCollection] = useState<CollectionItem[]>([]);

  const location = useLocation();

  useEffect(() => {
    setImage(location.state);

    getAsset(id!)
      .then((res) => {
        setCollection(res.collection.items);
      })
      .catch((err) => {
        setError(err.response.data.reason || "Error");
        setCollection([]);
        console.log(err);
      });
  }, [location.state, id]);

  return (
    <div className={styles.ShowPage}>
      <Link className={styles.back} to={"/"}>
        Back to Search
      </Link>
      <p>
        <b>Title:</b> {image?.data[0].title}
      </p>
      <p>
        <b>Location:</b> {image?.data[0].location || "Not provided"}
      </p>
      <p>
        <b>Creator:</b> {image?.data[0].secondary_creator}
      </p>
      <p>
        <b>Description:</b> {image?.data[0].description}
      </p>
      <p>
        <b>Keywords:</b> {image?.data[0].keywords}
      </p>
      <p>
        <b>Date created:</b> {image?.data[0].date_created}
      </p>

      <div className={styles.collectionImages}>
        <h3>Collection:</h3>

        {collection.length > 0 && (
          <img src={collection[0].href} alt="Collection image" />
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default ShowPage;
