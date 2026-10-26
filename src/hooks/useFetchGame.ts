import { getGameService } from "@/server/services";
import { useQuery } from "@tanstack/react-query";
import type { Slug } from "@/types/games";

export const useFetchGame = (slug: Slug) => {
  const { data: gameDetailed, isLoading: isLoadingGame } = useQuery({
    queryKey: ["game", slug],
    queryFn: () => getGameService(slug),
    gcTime: 5 * 60 * 1000,
    retry: 3,
  });

  return { gameDetailed, isLoadingGame };
};
