import type { URLType } from "@/types/base";
import type { DateType } from "@/types/base";

export type Slug = string;

export interface GameView {
  id: number;
  slug: Slug;
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

export interface GameData {
  id: string;
  title: string;
  slug: string;
  repoUrl: string | null;
  description: string | null;
  stars: number;
  language: string | null;
  genre: string | null;
  topics: string[] | null;
  lastCommitAt: string | null;
  createdAt: string;
  homepage: string | null;
  forks: number;
  openIssues: number;
  isArchived: boolean;
  category: string | null;
  isMultiplayer: boolean;
  license: string | null;
  platforms: string[] | null;
  latestRelease: string | null;
  downloadCount: number;
}

export interface GameFilters {
  page: number;
  pageSize: number;
  sort: "stars" | "lastCommit" | "createdAt" | "title" | "downloadCount";
  order: "asc" | "desc";
  genre?: string;
  language?: string;
  platform?: string;
}

export interface CategoryItem {
  slug: string;
  title: string;
  description?: string;
  count: number;
}
