import { Space, Select, Button, Tooltip, Card } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import {
  useGameFilters,
  useSetFilter,
  useResetFilters,
} from "@/store/useFiltersStore";
import { GAMES_CONSTANTS } from "@/constants/games";
import type { GameFilters } from "@/types/games";
import { FilterSelect } from "@/components/FilterSelect";

export const GameFilterPanel = () => {
  const filters = useGameFilters();
  const setFilter = useSetFilter();
  const resetFilters = useResetFilters();

  const currentSort = filters.sort || "stars";
  const currentOrder = filters.order || "desc";

  //switch between ascending and descending order parameters
  const toggleOrder = () => {
    const nextOrder = currentOrder === "asc" ? "desc" : "asc";
    setFilter("order", nextOrder);
  };

  return (
    <Card className="bg-white dark:bg-zinc-900 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-100 dark:border-zinc-800 [&>.ant-card-body]:p-4 transition-colors">
      <Space size="middle" wrap className="w-full justify-between">
        <Space size="middle" wrap>
          <Space size="small">
            <span className="text-slate-600 dark:text-zinc-400 font-medium transition-colors">
              Sort by:
            </span>
            <Select
              value={currentSort}
              onChange={(value) => setFilter("sort", value)}
              className="w-44"
              options={[...GAMES_CONSTANTS.SORT_OPTIONS]}
            />
            <Tooltip
              title={currentOrder === "asc" ? "Ascending" : "Descending"}
            >
              <Button
                type="text"
                icon={
                  currentOrder === "asc" ? (
                    <SortAscendingOutlined />
                  ) : (
                    <SortDescendingOutlined />
                  )
                }
                onClick={toggleOrder}
                className="text-base inline-flex items-center mr-2"
              />
            </Tooltip>
          </Space>

          {/* dynamic collection filter blocks mapped straight from configuration array */}
          {GAMES_CONSTANTS.FILTER_BY.map((type) => (
            <FilterSelect
              key={type}
              type={type}
              value={filters[type as keyof GameFilters] as string | undefined}
              onChange={(value) => setFilter(type as keyof GameFilters, value)}
            />
          ))}
        </Space>

        <Button
          type="default"
          danger
          icon={<ClearOutlined />}
          onClick={resetFilters}
        >
          Reset filters
        </Button>
      </Space>
    </Card>
  );
};
