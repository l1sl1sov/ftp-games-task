import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/server/services";
import type { CategoryItem } from "@/types/games";

interface CategoriesResponse {
  success: boolean;
  data: {
    categories: CategoryItem[];
    total: number;
    source: string;
  };
}

export const useFetchCategories = (type: string) => {
  // extract only categories array from response to stabilize payload reference
  const selectFn = useCallback((response: CategoriesResponse) => {
    return response.data.categories;
  }, []);

  return useQuery<CategoriesResponse, Error, CategoryItem[]>({
    queryKey: ["categories", type],
    queryFn: () => getCategories(type),
    enabled: Boolean(type),
    select: selectFn,
    staleTime: 5 * 60 * 1000,
  });
};
