import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { GameFilters } from "@/types/games";
import { GAMES_CONSTANTS } from "@/constants/games";

export interface AllAppFilters extends GameFilters {
  q?: string;
  searchPage?: number;
}

interface FilterStoreI {
  filters: AllAppFilters;
  setFilter: <K extends keyof AllAppFilters>(
    key: K,
    value: AllAppFilters[K],
  ) => void;
  resetFilters: () => void;
}

const initialFilters: AllAppFilters = {
  page: 1,
  pageSize: GAMES_CONSTANTS.PAGE_SIZE,
  sort: "stars",
  order: "desc",
  q: "",
  searchPage: 1,
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
            "searchPage",
          ].includes(key as string);

          const newFilters = {
            ...state.filters,
            [key]: value,
            ...(isResetPageRequired ? { page: 1, searchPage: 1 } : {}),
          };

          if (
            (value === undefined || value === null || value === "") &&
            !["page", "pageSize", "sort", "order", "searchPage"].includes(
              key as string,
            )
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
export const useSearchPageSelector = () =>
  useFiltersStore((state) => state.filters.searchPage || 1);
export const useSearchQuerySelector = () =>
  useFiltersStore((state) => state.filters.q || "");
export const useSetFilter = () => useFiltersStore((state) => state.setFilter);
export const useResetFilters = () =>
  useFiltersStore((state) => state.resetFilters);
