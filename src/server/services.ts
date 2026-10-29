import { api } from "@/server/base";
import type { Slug } from "@/types/games";
import type { GameFilters } from "@/types/games";
import { buildQueryParams } from "@/utils/buildQueryParams";

export const getGamesService = async (filters: GameFilters) => {
  const params = buildQueryParams(filters);
  const response = await api.get(`games?${params.toString()}`);
  return response.data;
};

export const getGameSearchService = async (searchParams: {
  q: string;
  page: number;
  pageSize: number;
}) => {
  const params = buildQueryParams(searchParams);
  const response = await api.get(`search?${params.toString()}`);
  return response.data;
};

export const getCategories = async (type: string) => {
  const response = await api.get(`categories?type=${type}&source=static`);
  return response.data;
};

export const getGameService = async (slug: Slug) => {
  const response = await api.get(`games/${slug}`);
  return response.data;
};
