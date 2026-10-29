import { useMemo } from "react";
import { getGameSearchService } from "@/server/services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { APP_CONFIG } from "@/constants/base";
import { useFiltersStore } from "@/store/useFiltersStore";

export const useGamesSearch = (searchParam: string) => {
  const { filters } = useFiltersStore();

  const trimmedSearch = searchParam.trim();

  const searchParams = useMemo(
    () => ({
      q: trimmedSearch,
      page: filters.page,
      pageSize: filters.pageSize,
    }),
    [trimmedSearch, filters.page, filters.pageSize],
  );

  const {
    data: rawResponse,
    isLoading: isLoadingSearchGames,
    isFetching: isFetchingSearchGames,
  } = useQuery({
    queryKey: ["gamesSearch", searchParams],
    queryFn: () => getGameSearchService(searchParams),
    enabled: !!trimmedSearch,
    placeholderData: keepPreviousData,
    staleTime: APP_CONFIG.STALE_TIME_MS,
  });

  const result = useMemo(() => {
    return {
      allGames: rawResponse?.data?.results || [],
      totalGames: rawResponse?.meta?.total || 0,
      pageSize: rawResponse?.meta?.pageSize || filters.pageSize,
      isLoadingAllGames: !!trimmedSearch ? isLoadingSearchGames : false,
      isFetchingAllGames: !!trimmedSearch ? isFetchingSearchGames : false,
    };
  }, [
    rawResponse,
    filters.pageSize,
    isLoadingSearchGames,
    isFetchingSearchGames,
    trimmedSearch,
  ]);

  return result;
};
