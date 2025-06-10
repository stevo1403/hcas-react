# Core Project Setup

## Environment & Project Structure
- **Web (React):**
  - Use Create React App with TypeScript or Next.js
  - Manage environment variables with `.env` files
  - Folder structure:
    - `src/core` (shared utilities, types, constants)
    - `src/features` (feature-based modules)
    - `src/components` (shared UI components)
    - `src/services` (API, auth, etc.)
    - `src/store` (Redux Toolkit slices/state)
    - `src/hooks` (custom hooks)
    - `src/theme` (Material UI theming)
    - `src/utils` (helper functions)

- **Native (React Native):**
  - Use Expo or React Native CLI with TypeScript
  - Manage environment variables with `react-native-dotenv`
  - Folder structure similar to web but adapted for React Native

## Theming
- **Web:**
  - Implement Material UI ThemeProvider with custom palette
  - Create palette based on branding guidelines
  - Use Inter font via CSS/font imports
  - Support light and dark modes via theme switching
  - Implement responsive design with MUI's system

- **Native:**
  - Use React Native Paper's ThemeProvider
  - Create theme based on branding guidelines
  - Use Inter font via font loading
  - Support light and dark modes
  - Implement responsive design using Dimensions and responsive utils

## Navigation
- **Web:**
  - Use React Router v6+ for routing
  - Implement protected routes for authenticated users
  - Use MUI AppBar + Drawer for navigation
  - Make responsive (mobile: drawer, desktop: persistent sidebar)
  - Lazy-load routes for performance

- **Native:**
  - Use React Navigation v6+
  - Implement authentication flow with protected screens
  - Use Bottom Tabs for main navigation
  - Make Profile accessible throughout the app

## State Management
- Use Redux Toolkit for global state
- Implement slice-based approach (one slice per feature)
- Use RTK Query or React Query with Axios for API state
- Separate UI, business logic, and data layers
- Use TypeScript interfaces for all state types

## Forms & Validation
- Use Formik with Yup validation
- Create reusable form components
- Extract validation rules from OpenAPI schema
- Implement form error handling and feedback

## API Integration
- Use Axios for API requests
- Use React Query for caching, loading states, and refetching
- Implement authentication with JWT tokens
- Handle offline support and error states

## Internationalization
- Use react-i18next for multi-language support
- Implement language switching
- Extract all UI strings to translation files

## Testing & Quality
- Use Jest and React Testing Library for testing
- Implement ESLint for code quality
- Use Prettier for consistent formatting
- Implement Sentry for error tracking

## Deployment
- **Web:** Configure for Vercel and/or Netlify
- **Native:** Configure for Expo and/or app stores 