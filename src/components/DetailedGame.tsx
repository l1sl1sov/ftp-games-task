import { Typography, Tag, Descriptions, Card, Button, Divider } from "antd";
import {
  GithubOutlined,
  GlobalOutlined,
  CalendarOutlined,
  CodeOutlined,
  StarOutlined,
  BranchesOutlined,
  BugOutlined,
  DownloadOutlined,
  LaptopOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { formatDate } from "@/utils/formatDate";
import { getAuthorInfo } from "@/utils/getAuthorInfo";
import { getSystemRequirements } from "@/utils/getSystemRequirements";

const { Title, Paragraph, Text } = Typography;

import type { GameData } from "@/types/games";
interface DetailedGameProps {
  game: GameData;
}

export const DetailedGame = ({ game }: DetailedGameProps) => {
  //filter from literals and all trash from backend
  const cleanField = (field: string | null) => {
    return field === "null" || !field ? null : field;
  };

  const genre = cleanField(game.genre);
  const latestRelease = cleanField(game.latestRelease);

  const author = getAuthorInfo(game.repoUrl);

  const systemRequirements = getSystemRequirements(
    game.platforms,
    game.language,
    game.license,
    game.isArchived,
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <Title level={1} className="m-0 font-bold text-gray-950 text-3xl">
            {game.title}
          </Title>
          <div className="flex flex-wrap gap-2 mt-3">
            {genre && (
              <Tag color="blue" className="px-3 py-0.5 text-sm rounded-md">
                {genre}
              </Tag>
            )}
            {game.category && (
              <Tag color="cyan" className="px-3 py-0.5 text-sm rounded-md">
                {game.category}
              </Tag>
            )}
            <Tag
              color={game.isMultiplayer ? "green" : "orange"}
              className="px-3 py-0.5 text-sm rounded-md"
            >
              {game.isMultiplayer ? "Multiplayer" : "Singleplayer"}
            </Tag>
            {latestRelease && (
              <Tag color="purple" className="px-3 py-0.5 text-sm rounded-md">
                Version: {latestRelease}
              </Tag>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          {game.repoUrl && (
            <Button
              type="default"
              icon={<GithubOutlined />}
              href={game.repoUrl}
              target="_blank"
              className="flex-1 md:flex-initial flex items-center justify-center"
            >
              Repository
            </Button>
          )}
          {game.homepage && (
            <Button
              type="primary"
              icon={<GlobalOutlined />}
              href={game.homepage}
              target="_blank"
              className="flex-1 md:flex-initial flex items-center justify-center bg-black hover:bg-gray-800 border-none"
            >
              Website
            </Button>
          )}
        </div>
      </div>

      <Divider className="my-0" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div>
            <Title level={4} className="text-gray-800 mb-3">
              About the Game
            </Title>
            <Paragraph className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
              {game.description || "No project description provided."}
            </Paragraph>
          </div>

          <Divider className="my-2" />

          <Descriptions
            title="Development & Release Details"
            column={1}
            bordered
            size="small"
            layout="horizontal"
          >
            <Descriptions.Item
              label={
                <span className="flex items-center gap-2">
                  <CalendarOutlined /> Release Date
                </span>
              }
            >
              {formatDate(game.createdAt)}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span className="flex items-center gap-2">
                  <UserOutlined /> Developer
                </span>
              }
            >
              {author.developer}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span className="flex items-center gap-2">
                  <TeamOutlined /> Publisher
                </span>
              }
            >
              {author.publisher}
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <span className="flex items-center gap-2">
                  <CodeOutlined /> Primary Language
                </span>
              }
            >
              {game.language || "Not listed"}
            </Descriptions.Item>
            {game.lastCommitAt && (
              <Descriptions.Item label="Last Update">
                {formatDate(game.lastCommitAt)}
              </Descriptions.Item>
            )}
          </Descriptions>

          {game.topics && game.topics.length > 0 && (
            <div>
              <Title level={5} className="text-gray-700 mb-2">
                Project Topics
              </Title>
              <div className="flex flex-wrap gap-1.5">
                {game.topics.map((topic) => (
                  <Tag
                    key={topic}
                    className="bg-gray-50 text-gray-600 border-gray-200 rounded"
                  >
                    #{topic}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <Card
            title={
              <span className="flex items-center gap-2">
                <LaptopOutlined /> System Requirements
              </span>
            }
            size="small"
            className="rounded-xl border-gray-200 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              {systemRequirements.map((req, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-b border-gray-100 pb-2 last:border-0 last:pb-0"
                >
                  <Text
                    type="secondary"
                    className="text-xs uppercase tracking-wider"
                  >
                    {req.label}
                  </Text>
                  <Text className="text-gray-800 font-medium">{req.value}</Text>
                </div>
              ))}
            </div>
          </Card>

          <Card
            title="Repository Metrics"
            size="small"
            className="rounded-xl border-gray-200 shadow-sm bg-gray-50"
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <Text type="secondary" className="block text-xs">
                  <StarOutlined /> Stars
                </Text>
                <Text className="text-lg font-bold text-gray-900">
                  {game.stars ?? 0}
                </Text>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <Text type="secondary" className="block text-xs">
                  <BranchesOutlined /> Forks
                </Text>
                <Text className="text-lg font-bold text-gray-900">
                  {game.forks ?? 0}
                </Text>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <Text type="secondary" className="block text-xs">
                  <BugOutlined /> Issues
                </Text>
                <Text className="text-lg font-bold text-red-500">
                  {game.openIssues ?? 0}
                </Text>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <Text type="secondary" className="block text-xs">
                  <DownloadOutlined /> Downloads
                </Text>
                <Text className="text-lg font-bold text-green-600">
                  {game.downloadCount ?? 0}
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
