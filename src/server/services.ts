import { api } from "@/server/base";

interface FiltersI {
  page: number;
  limit: number;
}

export const getGamesService = async ({ page, limit }: FiltersI) => {
  const response = await api.get(`games?page=${page}&pageSize=${limit}`);

  return response.data;
};
