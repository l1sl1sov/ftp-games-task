import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GameFilters } from "@/types/games";
import { GAMES_CONSTANTS } from "@/constants/games";

interface FilterStoreI {
  filters: GameFilters;
  setFilter: <K extends keyof GameFilters>(
    key: K,
    value: GameFilters[K],
  ) => void;
  resetFilters: () => void;
}

const initialFilters: GameFilters = {
  page: 1,
  pageSize: GAMES_CONSTANTS.PAGE_SIZE,
  sort: "stars",
  order: "desc",
};

export const useFiltersStore = create<FilterStoreI>()(
  persist(
    (set) => ({
      filters: initialFilters,

      setFilter: (key, value) =>
        set((state) => {
          const isResetPageRequired = ![
            "page",
            "pageSize",
            "sort",
            "order",
          ].includes(key as string);

          const newFilters = {
            ...state.filters,
            [key]: value,
            ...(isResetPageRequired ? { page: 1 } : {}),
          };

          if (
            (value === undefined || value === null || value === "") &&
            !["page", "pageSize", "sort", "order"].includes(key as string)
          ) {
            delete newFilters[key];
          }

          return { filters: newFilters };
        }),

      resetFilters: () => set({ filters: initialFilters }),
    }),
    {
      name: "games_filters_state",
    },
  ),
);

export const useGameFilters = () => useFiltersStore((state) => state.filters);
export const usePageSelector = () =>
  useFiltersStore((state) => state.filters.page);
export const usePageSizeSelector = () =>
  useFiltersStore((state) => state.filters.pageSize);
export const useSortSelector = () =>
  useFiltersStore((state) => state.filters.sort);
export const useSetFilter = () => useFiltersStore((state) => state.setFilter);
export const useResetFilters = () =>
  useFiltersStore((state) => state.resetFilters);
