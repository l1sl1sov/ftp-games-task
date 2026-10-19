export const getAuthorInfo = (repoUrl: string | null) => {
  if (repoUrl) {
    const parts = repoUrl.replace("https://github.com", "").split("/");
    if (parts.length >= 2) {
      return {
        developer: parts[0],
        publisher: `${parts[0]} Community`,
      };
    }
  }
  return {
    developer: "Open Source Contributor",
    publisher: "Community Driven",
  };
};
