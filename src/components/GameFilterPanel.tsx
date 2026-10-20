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

export const GameFilterPanel = () => {
  const filters = useGameFilters();
  const setFilter = useSetFilter();
  const resetFilters = useResetFilters();

  const currentSort = filters.sort || "title";
  const currentOrder = filters.order || "asc";

  const toggleOrder = () => {
    const nextOrder = currentOrder === "asc" ? "desc" : "asc";
    setFilter("order", nextOrder);
  };

  return (
    <Card className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#f0f0f0] [&>.ant-card-body]:p-4">
      <Space size="middle" wrap className="w-full justify-between">
        <Space size="small">
          <span className="text-[#000000a6] font-medium">Sort by:</span>

          <Select
            value={currentSort}
            onChange={(value) => setFilter("sort", value)}
            className="w-40"
            options={[
              { value: "title", label: "Title" },
              { value: "stars", label: "Stars" },
            ]}
          />

          <Tooltip title={currentOrder === "asc" ? "Ascending" : "Descending"}>
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
              className="text-base inline-flex items-center"
            />
          </Tooltip>
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
