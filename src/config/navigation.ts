export type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "lore", path: "/lore", isContentType: true },
  { key: "fanmade", path: "/fanmade", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
