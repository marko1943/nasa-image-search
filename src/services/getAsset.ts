import { API_URL } from "@/constants/API";
import axios from "axios";

export async function getAsset(id: string) {
  const response = await axios.get(API_URL + "/asset/" + id);

  if (response.status !== 200) {
    const message = `An error has occured: ${response}`;
    throw new Error(message);
  }

  return await response.data;
}
