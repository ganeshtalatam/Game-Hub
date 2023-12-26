import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Publisher {
  name: string;
  id: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: genre[];
  game_pk: string;
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gamequery = useGameQueryStore((s) => s.gameQery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gamequery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gamequery.genreId,
          parent_platforms: gamequery.platformId,
          ordering: gamequery.order,
          search: gamequery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allpages) => {
      return lastPage.next ? allpages.length + 1 : undefined;
    },
  });
};

// useData<Game>("/games" , {} , [gamequery])

export default useGames;

// const [games, setGames] = useState<Game[]>([]);
// const [error, setError] = useState("");
// const [isLoading ,setLoading] = useState(false)

// useEffect(() => {
//   const controller = new AbortController()
//   setLoading(true)

//   apiClient
//     .get<FetchGameResponse>("/games" , {signal : controller.signal})
//     .then((res) => {
//       setLoading(false)
//       setGames(res.data.results)})
//     .catch((err) => {
//       if (err instanceof CanceledError) return
//       setLoading(false)
//       setError(err.message)});

//   return () => controller.abort()
//   } ,[]);
//   return {games,error,isLoading}
