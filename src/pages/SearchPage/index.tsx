import styles from "./SearchPage.module.scss";
import { useEffect, useReducer, useState } from "react";
import { getImages } from "@/services/getImages";
import { NasaImageType } from "@/types/NasaImage";
import NasaImage from "@/components/NasaImage";
import debounce from "lodash.debounce";

type SearchParams = {
  searchTerm: string;
  startYear: string;
  endYear: string;
};

const formReducer = (
  state: SearchParams,
  action: { type: string; field: string; payload: string }
) => {
  switch (action.type) {
    case "HandleInputText": {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }

    default:
      return state;
  }
};

const initialState: SearchParams = {
  searchTerm: "",
  startYear: "",
  endYear: "",
};

const SearchPage = () => {
  const [images, setImages] = useState<NasaImageType[]>([]);

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "HandleInputText",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    if (formState.searchTerm) {
      setImages([]);
      return;
    }
  }, [formState.searchTerm]);

  const search = debounce(() => {
    const params = {
      q: formState.searchTerm,
      page_size: 10,
    };

    getImages(params)
      .then((res) => {
        console.log(res);
        setImages(res.collection.items);
      })
      .catch((err) => {
        // TODO Add some error mechanism
        console.log(err);
      });
  }, 200);

  return (
    <div className={styles.SearchPage}>
      <div className={styles.inputWrapper}>
        {/* TODO make a component out of this */}
        <input
          type="text"
          name="searchTerm"
          placeholder="Search term"
          value={formState.searchTerm}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="start year"
          name="startYear"
          value={formState.startYear}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="endYear"
          placeholder="end year"
          value={formState.endYear}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={search}>Search</button>
      </div>

      <div className={styles.imagesWrapper}>
        {images.length > 0
          ? images.map((image: NasaImageType) => (
              <NasaImage image={image} key={image.data[0].nasa_id} />
            ))
          : "No results found"}
      </div>
    </div>
  );
};

export default SearchPage;
