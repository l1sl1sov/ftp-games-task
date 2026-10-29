export const GAMES_CONSTANTS = {
  PAGE_SIZE: 20,
  FILTER_BY: ["genre", "language"],
  SORT_OPTIONS: [
    { value: "stars", label: "Stars" },
    { value: "title", label: "Title" },
    { value: "lastCommit", label: "Last Commit" },
    { value: "createdAt", label: "Created At" },
    { value: "downloadCount", label: "Downloads" },
  ],
  DEBOUNCE_VALUE_MS: 450,
} as const;
