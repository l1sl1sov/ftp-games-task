import { GamesList } from "@/components/GamesLIst";
import { GameFilterPanel } from "@/components/GameFilterPanel";

const HomePage = () => {
  return (
    <div>
      <GameFilterPanel />
      <GamesList />
    </div>
  );
};

export default HomePage;
