import { api } from "@/server/base";
import type { Slug } from "@/types/games";

interface FiltersI {
  page: number;
  limit: number;
}

export const getGamesService = async ({ page, limit }: FiltersI) => {
  const response = await api.get(`games?page=${page}&pageSize=${limit}`);

  return response.data;
};

export const getGameService = async (slug: Slug) => {
  const response = await api.get(`games/${slug}`);

  return response.data;
};
