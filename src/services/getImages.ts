import { API_URL } from "@/constants/API";
import axios from "axios";

export async function getImages(params: object) {
  const response = await axios.get(API_URL + "/search", { params });

  if (response.status !== 200) {
    const message = `An error has occured: ${response}`;
    throw new Error(message);
  }

  return await response.data;
}
