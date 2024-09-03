import axios from "axios";
import { Response } from "./api.types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (
  query: string,
  page: number
): Promise<Response> => {
  const response = await axios.get<Response>("/search/photos", {
    params: {
      client_id: "mCzPttG9inWIr-UjYtTJi8KShYhzg07iYxNt3bSp6DA",
      query,
      page,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return response.data;
};
