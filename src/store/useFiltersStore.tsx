import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterStoreI {
  page: number;
  setPage: (newPage: number) => void;
}

export const useFiltersStore = create<FilterStoreI>()(
  persist(
    (set) => ({
      page: 1,
      setPage: (newPage: number) => {
        set((state) => ({ ...state, page: newPage }));
      },
    }),
    { name: "games_pagination_state" },
  ),
);

export const usePageSelector = () => useFiltersStore((state) => state.page);
export const useSetPageSelector = () =>
  useFiltersStore((state) => state.setPage);
