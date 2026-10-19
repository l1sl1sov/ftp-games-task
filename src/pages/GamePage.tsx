import { useParams } from "react-router";
import { Spin } from "antd";
import { ComeBackBtn } from "@/components/ComeBackBtn";
import { DetailedGame } from "@/components/DetailedGame";
import { useFetchGame } from "@/hooks/useFetchGame";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const GamePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { gameDetailed, isLoadingGame } = useFetchGame(slug || "");

  if (isLoadingGame) {
    return (
      <div className="w-full flex-1 flex items-center justify-center min-h-100">
        <Spin size="large" description="Loading game data..." />
      </div>
    );
  }

  const game = gameDetailed?.data?.game;

  if (!game) {
    return <NotFoundPage />;
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 flex flex-col gap-6 flex-1">
      <div>
        <ComeBackBtn />
      </div>

      <div className="flex-1">
        <DetailedGame game={game} />
      </div>
    </div>
  );
};
