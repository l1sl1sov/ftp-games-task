import { getGamesService } from "@/server/services";
import { useQuery } from "@tanstack/react-query";
import { APP_CONFIG } from "@/constants/base";

export const useFetchGames = () => {
  const {
    data: allGames,
    isLoading: isLoadingAllGames,
    isFetching: isFetchingAllGames,
  } = useQuery({
    queryKey: ["games", "all"],
    queryFn: getGamesService,
    staleTime: APP_CONFIG.STALE_TIME_MS,
    select: (rawResponse) => rawResponse?.data?.games,
  });

  return {
    allGames,
    isLoadingAllGames,
    isFetchingAllGames,
  };
};
