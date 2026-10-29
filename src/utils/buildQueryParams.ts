export const buildQueryParams = (
  paramsObj: Record<string, any>,
): URLSearchParams => {
  const params = new URLSearchParams();

  Object.entries(paramsObj).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      params.append(key, String(value));
    }
  });

  return params;
};
