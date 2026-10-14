import { getGamesService } from "@/server/services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { APP_CONFIG } from "@/constants/base";
import { usePageSelector } from "@/store/useFiltersStore";
import { GAMES_CONSTANTS } from "@/constants/games";

export const useFetchGames = () => {
  const page = usePageSelector();
  const constPageSize = GAMES_CONSTANTS.PAGE_SIZE;

  const {
    data,
    isLoading: isLoadingAllGames,
    isFetching: isFetchingAllGames,
  } = useQuery({
    queryKey: ["games", { page, limit: constPageSize }],
    queryFn: () => getGamesService({ page: page, limit: constPageSize }),
    placeholderData: keepPreviousData,
    staleTime: APP_CONFIG.STALE_TIME_MS,

    select: (rawResponse) => {
      return {
        games: rawResponse?.data?.games || [],
        total: rawResponse?.meta?.total || 0,
        pageSize: rawResponse?.meta?.pageSize || constPageSize,
      };
    },
  });

  return {
    allGames: data?.games || [],
    totalGames: data?.total || 0,
    pageSize: data?.pageSize || constPageSize,
    isLoadingAllGames,
    isFetchingAllGames,
  };
};
