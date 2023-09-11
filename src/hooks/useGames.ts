import { genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "../App";




export interface Platform{
  id : number,
  name: string, 
  slug : string
}

export interface Game {
    id: number;
    name: string;
    background_image : string
    parent_platforms : {platform : Platform}[]
    metacritic : number
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = (gamequery : GameQuery) => useData<Game>("/games" , {params : { genres : gamequery.genre?.id , platforms : gamequery.platform?.id , ordering : gamequery.order , search : gamequery.search  }} , [gamequery])

export default useGames

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