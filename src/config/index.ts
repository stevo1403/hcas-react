export const config = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || '/',
  APP_NAME: 'Health Center Automation System',
  APP_SHORT_NAME: 'HCAS',
  JWT_TOKEN_KEY: 'hcas_token',
  REFRESH_TOKEN_KEY: 'hcas_refresh_token',
  USER_PREFERENCES_KEY: 'hcas_user_preferences',

  // Pagination defaults
  DEFAULT_PAGE_SIZE: 10,

  // File upload limits
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'application/pdf'],

  // Theme colors
  COLORS: {
    primary: '#2E7D32',
    secondary: '#00897B',
    accent: '#FFB74D',
    error: '#D32F2F',
    success: '#7CB342',
    background: '#FAFAFA',
    surface: '#F5F5F5',
    textPrimary: '#212121',
    textSecondary: '#757575',
    divider: '#E0E0E0',
  },
};

export default config;