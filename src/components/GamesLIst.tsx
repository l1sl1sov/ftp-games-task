import { useFetchGames } from "@/hooks/useFetchGames";
import { Link } from "react-router";
import { Typography, Empty, Tag, Badge } from "antd";
import { LoadingSpin } from "@/components/UI/LoadingSpin";
import {
  CalendarOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import type { GameView } from "@/types/games";
import { usePageSelector } from "@/store/useFiltersStore";
import { useSetFilter } from "@/store/useFiltersStore";
import { Pagination } from "antd";

export const GamesList = () => {
  const currentPage = usePageSelector();
  const setFilter = useSetFilter();

  const setPage = (pageNumber: number) => setFilter("page", pageNumber);

  //i use total games and pagesize for pagination ant design component
  const {
    allGames,
    isLoadingAllGames,
    totalGames,
    pageSize,
    isFetchingAllGames,
  } = useFetchGames();

  if (isLoadingAllGames) {
    return <LoadingSpin desc="games" />;
  }

  //preventive return
  if (!allGames || allGames.length === 0) {
    return (
      <div className="flex justify-center items-center py-24 w-full">
        <Empty
          description="Games not found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex justify-center mt-2 w-full">
        <Pagination
          current={currentPage}
          total={totalGames}
          pageSize={pageSize}
          showQuickJumper={true}
          showSizeChanger={false}
          disabled={isFetchingAllGames}
          onChange={(page) => setPage(page)}
        />
      </div>
      <ul className="list-none p-0 m-0 flex flex-col gap-4 w-full">
        {allGames.map((game: GameView) => (
          <li key={game.id} className="w-full">
            <Link
              to={`/games/${game.slug || game.id}`}
              className="group flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-black transition-all duration-200 w-full block"
            >
              <div className="flex-1 min-w-0 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <Typography.Title
                    level={3}
                    className="m-0 text-lg md:text-xl font-bold text-gray-900 group-hover:text-black transition-colors"
                    style={{ margin: 0 }}
                  >
                    {game.title}
                  </Typography.Title>

                  {game.isMultiplayer && (
                    <Badge
                      status="processing"
                      text={
                        <span className="text-xs text-blue-600 font-medium">
                          Multiplayer
                        </span>
                      }
                    />
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-gray-700">
                    <GlobalOutlined className="text-gray-400" />
                    {game.license ||
                      (game.topics && game.topics[0]) ||
                      "Open Source"}
                  </span>

                  <span className="hidden sm:inline text-gray-300">•</span>

                  <span className="flex items-center gap-1.5 text-gray-600">
                    <CalendarOutlined className="text-gray-400" />
                    {game.createdAt
                      ? new Date(game.createdAt).toLocaleDateString("ru-RU")
                      : "—"}
                  </span>

                  {game.genre && (
                    <Tag
                      color="default"
                      className="m-0 bg-gray-50 border-gray-200 text-gray-600 font-medium px-2.5 py-0.5 rounded-md"
                    >
                      {game.genre}
                    </Tag>
                  )}
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 md:line-clamp-1 m-0 mt-1 max-w-4xl leading-relaxed">
                  {game.description}
                </p>
              </div>

              <div className="flex items-center justify-end shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center transition-colors duration-200">
                  <ArrowRightOutlined className="text-gray-400 group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-px group-hover:translate-x-px text-sm" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
