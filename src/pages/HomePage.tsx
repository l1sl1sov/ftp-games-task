import { GamesList } from "@/components/GamesLIst";
import { GameFilterPanel } from "@/components/GameFilterPanel";
import { useSearchQuerySelector } from "@/store/useFiltersStore";

const HomePage = () => {
  const searchQuery = useSearchQuerySelector();

  //not gonna render filters if search mode is active
  const isSearchActive = searchQuery.trim().length > 0;

  return (
    <div>
      {!isSearchActive && <GameFilterPanel />}

      <GamesList />
    </div>
  );
};

export default HomePage;
