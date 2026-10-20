import { api } from "@/server/base";
import type { Slug } from "@/types/games";
import type { GameFilters } from "@/types/games";

export const getGamesService = async (filters: GameFilters) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, String(value));
    }
  });

  const response = await api.get(`games?${params.toString()}`);
  return response.data;
};

export const getGameService = async (slug: Slug) => {
  const response = await api.get(`games/${slug}`);

  return response.data;
};

export const getCategories = async (type: string) => {
  const response = await api.get(`categories?type=${type}&source=static`);

  return response.data;
};
