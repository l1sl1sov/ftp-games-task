import { useFetchGames } from "@/hooks/useFetchGames";
import { Empty } from "antd";
import { LoadingSpin } from "@/components/UI/LoadingSpin";
import { usePageSelector, useSetFilter } from "@/store/useFiltersStore";
import { Pagination } from "antd";
import { GameCard } from "./GameCard";
import type { GameView } from "@/types/games";

const dateFormatter = new Intl.DateTimeFormat("ru-RU");

export const GamesList = () => {
  const currentPage = usePageSelector();
  const setFilter = useSetFilter();

  const setPage = (pageNumber: number) => {
    setFilter("page", pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); //scroll to top when page changes
  };

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

  //common function for top and bottom pagination
  const renderPagination = () => (
    <div className="flex justify-center mt-2 w-full">
      <Pagination
        current={currentPage}
        total={totalGames}
        pageSize={pageSize}
        showQuickJumper={true}
        showSizeChanger={false}
        pageSizeOptions={[]}
        disabled={isFetchingAllGames}
        onChange={(page) => setPage(page)}
      />
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-6">
      {renderPagination()}

      <ul className="list-none p-0 m-0 flex flex-col gap-4 w-full">
        {allGames.map((game: GameView) => (
          <li key={game.id} className="w-full">
            <GameCard game={game} dateFormatter={dateFormatter} />
          </li>
        ))}
      </ul>

      {renderPagination()}
    </div>
  );
};
