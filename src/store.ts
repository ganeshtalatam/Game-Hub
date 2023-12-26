import { create } from "zustand";
import { Platform } from "./hooks/useGames";
import { genre } from "./hooks/useGenres";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  order?: string;
  search?: string;
}

interface gameQueryStore {
  gameQery: GameQuery;
  setSearchText: (search: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortedOrder: (order: string) => void;
}

const useGameQueryStore = create<gameQueryStore>((set) => ({
  gameQery: {},
  setSearchText: (search) => set(() => ({ gameQery: { search } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQery: { ...store.gameQery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQery: { ...store.gameQery, platformId } })),
  setSortedOrder: (order) =>
    set((store) => ({ gameQery: { ...store.gameQery, order } })),
}));

export default useGameQueryStore;
