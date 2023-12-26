import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["Screenshot", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
