import { api } from "@/server/base";

export const getGamesService = async () => {
  const response = await api.get("games");
  console.log(response.data);
  return response.data;
};
