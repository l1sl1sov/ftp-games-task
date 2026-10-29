import { useState, useEffect } from "react";
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchQuerySelector, useSetFilter } from "@/store/useFiltersStore";

export const GamesSearch = () => {
  const storeSearchQuery = useSearchQuerySelector();
  const setFilter = useSetFilter();

  const [inputValue, setInputValue] = useState(storeSearchQuery);

  const debouncedSearchQuery = useDebounce(inputValue, 350);

  useEffect(() => {
    setInputValue(storeSearchQuery);
  }, [storeSearchQuery]);

  //after debounce set zustand state
  useEffect(() => {
    if (debouncedSearchQuery !== storeSearchQuery) {
      setFilter("q", debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, storeSearchQuery, setFilter]);

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search games..."
      prefix={
        <SearchOutlined className="text-slate-400 group-focus-within:text-primary transition-colors" />
      }
      variant="filled"
      className="bg-slate-100 dark:bg-zinc-800 border border-transparent hover:border-slate-200 dark:hover:border-zinc-700 focus:border-primary focus:bg-white dark:focus:bg-zinc-900 transition-all rounded-lg py-1.5"
      allowClear
    />
  );
};
