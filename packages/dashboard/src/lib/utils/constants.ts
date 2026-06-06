export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const LOCAL_STORAGE_KEYS = {
  theme: 'growfoundry-theme',
  selectedLogSource: 'selectedLogSource',
  sqlEditorTabs: 'sql-editor-tabs',
  sqlEditorActiveTab: 'sql-editor-active-tab',
  databaseTablePreferences: 'growfoundry.database.tables.preferences.v1',
} as const;

export const LOCAL_STORAGE_KEY_PREFIXES = {
  pageSize: 'growfoundry-page-size',
} as const;
