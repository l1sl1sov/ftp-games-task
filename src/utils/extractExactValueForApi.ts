//for extracting from api-responce data with no any extra hum
export const extractExactValueForApi = (
  slug: string,
  title: string,
  type: string,
): string => {
  if (type === "genre") {
    return slug.replace("best-open-source-", "").replace("-games", "");
  }

  if (type === "language") {
    return title.replace("Open Source Games Written in ", "");
  }

  return slug;
};
