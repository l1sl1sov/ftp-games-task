import { create } from "zustand";

interface FilterStoreI {
  page: number;
  setPage: (newPage: number) => void;
}

export const useFiltersStore = create<FilterStoreI>()((set) => ({
  page: 1,
  setPage: (newPage: number) => {
    set((state) => ({ ...state, page: newPage }));
  },
}));

export const usePageSelector = () => useFiltersStore((state) => state.page);
export const useSetPageSelector = () =>
  useFiltersStore((state) => state.setPage);
