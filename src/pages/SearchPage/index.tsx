import styles from "./SearchPage.module.scss";
import { useEffect, useReducer, useState } from "react";
import { Params, getImages } from "@/services/getImages";
import { NasaImageType } from "@/types/NasaImage";
import NasaImage from "@/components/NasaImage";
import debounce from "lodash.debounce";
import CustomInput from "@/components/CustomInput/CustomInput";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "HandleInputText",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    if (!formState.searchTerm) {
      setImages([]);
    }
  }, [formState.searchTerm]);

  const search = debounce(() => {
    const params: Params = {
      q: formState.searchTerm,
      page_size: 50,
    };

    if (formState.startYear) params.year_start = formState.startYear;
    if (formState.endYear) params.year_end = formState.endYear;

    setLoading(true);

    getImages(params)
      .then((res) => {
        setImages(res.collection.items);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, 200);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") search();
  };

  return (
    <div className={styles.SearchPage}>
      <div className={styles.inputWrapper}>
        <CustomInput
          type="text"
          name="searchTerm"
          placeholder="search term"
          value={formState.searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <CustomInput
          type="number"
          placeholder="start year"
          name="startYear"
          value={formState.startYear}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <CustomInput
          type="number"
          name="endYear"
          placeholder="end year"
          value={formState.endYear}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={search}>Search</button>
      </div>

      <div className={styles.imagesWrapper}>
        {loading && "Loading..."}
        {images.map((image: NasaImageType) => (
          <NasaImage image={image} key={image.data[0].nasa_id} />
        ))}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

export default SearchPage;
