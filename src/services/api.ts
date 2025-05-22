import axios from "axios";
import Image from "../types/Image";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;

// Добавляем интерфейс для структуры ответа от Unsplash
interface UnsplashResponse {
  total: Number;
  total_pages: Number;
  results: Image[];
}

//Типизация возвращаемого Promise от fetchImages

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  console.log(query);
  const response = await axios.get<UnsplashResponse>(
    `${BASE_URL}/search/photos?`,
    {
      params: {
        client_id: ACCESS_KEY,
        query: query,
        page: page,
        per_page: 12,
        orientation: "landscape",
      },
    }
  );
  return response.data;
};
