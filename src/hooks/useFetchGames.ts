import { useMemo } from "react";
import { getGamesService } from "@/server/services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { APP_CONFIG } from "@/constants/base";
import { useFiltersStore } from "@/store/useFiltersStore";

export const useFetchGames = () => {
  const { filters } = useFiltersStore();

  // automatically triggers refetching when filters inside store change
  const {
    data: rawResponse,
    isLoading: isLoadingAllGames,
    isFetching: isFetchingAllGames,
  } = useQuery({
    queryKey: ["games", filters],
    queryFn: () => getGamesService(filters),
    placeholderData: keepPreviousData,
    staleTime: APP_CONFIG.STALE_TIME_MS,
  });

  // stabilize data structure and fallback defaults to prevent redundant re-renders
  const result = useMemo(() => {
    return {
      allGames: rawResponse?.data?.games || [],
      totalGames: rawResponse?.meta?.total || 0,
      pageSize: rawResponse?.meta?.pageSize || filters.pageSize,
      isLoadingAllGames,
      isFetchingAllGames,
    };
  }, [rawResponse, filters.pageSize, isLoadingAllGames, isFetchingAllGames]);

  return result;
};
