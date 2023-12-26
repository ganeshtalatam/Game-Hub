// import { genre } from './useGenres';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/api-client";
import genresList from "../data/genresList";

export interface genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genresList.length, results: genresList },
  });

export default useGenres;
