import type { URLType } from "@/types/base";
import type { DateType } from "@/types/base";

export interface GameView {
  id: number;
  slug: string;
  title: string;
  description: string;
  repoUrl: URLType;
  language: string;
  genre: string;
  stars: number;
  forks: number;
  openIssues: number;
  createdAt: DateType;
  lastCommitAt: DateType;
  license: string;
  topics: string[];
  isMultiplayer: boolean;
  platforms: string[];
}
