export interface SystemRequirement {
  label: string;
  value: string;
}

export const getSystemRequirements = (
  platforms: string[] | null,
  language: string | null,
  license: string | null,
  isArchived: boolean,
): SystemRequirement[] => {
  const platformsStr =
    platforms && platforms.length > 0
      ? platforms.join(", ")
      : "Windows, Linux, macOS";

  return [
    { label: "OS Support", value: platformsStr },
    { label: "Runtime / Language", value: language || "Native Environment" },
    { label: "License", value: license || "Open Source" },
    { label: "Status", value: isArchived ? "Archived (Read-Only)" : "Active" },
  ];
};
