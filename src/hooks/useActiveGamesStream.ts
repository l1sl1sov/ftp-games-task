import { useMemo } from "react";
import { useSearchQuerySelector } from "@/store/useFiltersStore";
import { useFetchGames } from "./useFetchGames";
import { useGamesSearch } from "./useGamesSearch";

//hook for returning information about games depending on search mode or classic mode (the only source of data for component)
export const useActiveGamesStream = () => {
  const searchQuery = useSearchQuerySelector();

  const isSearchActive = searchQuery.trim().length > 0;

  const totalGamesStream = useFetchGames();
  const searchGamesStream = useGamesSearch(searchQuery);

  const activeStream = useMemo(() => {
    if (isSearchActive) {
      return {
        allGames: searchGamesStream.allGames,
        totalGames: searchGamesStream.totalGames,
        pageSize: searchGamesStream.pageSize,
        isLoadingAllGames: searchGamesStream.isLoadingAllGames,
        isFetchingAllGames: searchGamesStream.isFetchingAllGames,
        isSearchMode: true,
      };
    }

    return {
      allGames: totalGamesStream.allGames,
      totalGames: totalGamesStream.totalGames,
      pageSize: totalGamesStream.pageSize,
      isLoadingAllGames: totalGamesStream.isLoadingAllGames,
      isFetchingAllGames: totalGamesStream.isFetchingAllGames,
      isSearchMode: false,
    };
  }, [isSearchActive, totalGamesStream, searchGamesStream]);

  return activeStream;
};
