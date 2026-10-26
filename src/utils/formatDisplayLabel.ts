export const formatDisplayLabel = (
  valueForApi: string,
  type: string,
): string => {
  if (type === "genre") {
    return valueForApi
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return valueForApi;
};
