import { memo } from "react";
import { Link } from "react-router";
import { Typography, Tag, Badge } from "antd";
import {
  CalendarOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import type { GameView } from "@/types/games";

interface GameCardProps {
  game: GameView;
  dateFormatter: Intl.DateTimeFormat;
}

export const GameCard = memo(({ game, dateFormatter }: GameCardProps) => {
  return (
    <Link
      to={`/games/${game.slug || game.id}`}
      className="group flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-md hover:border-primary dark:hover:border-primary transition-all duration-200 w-full block"
    >
      <div className="flex-1 min-w-0 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <Typography.Title
            level={3}
            className="m-0 text-lg md:text-xl font-bold text-gray-900 dark:text-zinc-100 group-hover:text-primary transition-colors"
            style={{ margin: 0 }}
          >
            {game.title}
          </Typography.Title>

          {game.isMultiplayer && (
            <Badge
              status="processing"
              text={
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Multiplayer
                </span>
              }
            />
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 dark:text-zinc-400 font-medium">
          <span className="flex items-center gap-1.5 uppercase tracking-wider text-gray-700 dark:text-zinc-300">
            <GlobalOutlined className="text-gray-400 dark:text-zinc-500" />
            {game.license || (game.topics && game.topics[0]) || "Open Source"}
          </span>

          <span className="hidden sm:inline text-gray-300 dark:text-zinc-700">
            •
          </span>

          <span className="flex items-center gap-1.5 text-gray-600 dark:text-zinc-400">
            <CalendarOutlined className="text-gray-400 dark:text-zinc-500" />
            {game.createdAt
              ? dateFormatter.format(new Date(game.createdAt))
              : "—"}
          </span>

          {game.genre && game.genre !== "null" && (
            <Tag
              color="default"
              className="m-0 bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-300 font-medium px-2.5 py-0.5 rounded-md"
            >
              {game.genre}
            </Tag>
          )}
        </div>

        <p className="text-sm text-gray-500 dark:text-zinc-400 line-clamp-2 md:line-clamp-1 m-0 mt-1 max-w-4xl leading-relaxed">
          {game.description}
        </p>
      </div>

      <div className="flex items-center justify-end shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center transition-colors duration-200 group-hover:border-primary dark:group-hover:border-primary">
          <ArrowRightOutlined className="text-gray-400 dark:text-zinc-500 group-hover:text-primary transition-all duration-300 transform group-hover:-translate-y-px group-hover:translate-x-px text-sm" />
        </div>
      </div>
    </Link>
  );
});
