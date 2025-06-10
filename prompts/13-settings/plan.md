# Settings & System Configuration Module

## User Flows
- View and update user preferences (e.g., language, theme, notification settings)
- Admin: View and update system-wide settings (e.g., branding, operational hours, feature toggles)
- Manage notification preferences (push, email, SMS)
- Change password (user)
- Enable/disable dark mode

## Web Implementation (React + Material UI)
- Use React Router for settings routes
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- Material UI components:
  - Card/Paper for settings sections
  - List/ListItem for settings groups
  - Switch for toggles
  - Select/MenuItem for dropdowns
  - TextField for text inputs
  - Dialog for password change confirmation
  - Snackbar/Alert for success/error messages
  - Divider for section separation
  - Typography for section headers
- Formik + Yup for form handling and validation
- Role-based access control (admin-only settings)
- Theme provider for light/dark mode toggle
- Context provider for global settings

## Native Implementation (React Native + Paper)
- Use React Navigation for settings screens
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- React Native Paper components:
  - Card for settings sections
  - List/ListItem for settings groups
  - Switch for toggles
  - Dropdown for select menus
  - TextInput for text inputs
  - Dialog for password change confirmation
  - Snackbar for success/error messages
  - Divider for section separation
  - Text components for section headers
- Formik + Yup for form handling and validation
- Role-based access control (admin-only settings)
- Theme provider for light/dark mode toggle
- Context provider for global settings

## Common Elements
- TypeScript interfaces for all models and requests
- Extract validation schemas from OpenAPI specification
- Loading indicators for async operations
- Error handling and user feedback
- Permission-based UI rendering
- Persist user preferences in local storage
- Follow branding guidelines (colors, fonts, etc.)
- Accessibility support (ARIA for web, Accessibility API for native)
- Dark mode support using theme provider
- Comprehensive unit and integration tests

## Automation & API Alignment
- All forms and data-driven screens must extract fields, types, and validation from openapi.json
- Endpoints: /api/users/me/, /api/users/me/password/, /api/admin/settings/
- Models: UserProfileResponse, UserProfileUpdateRequest, Settings, SettingsUpdateRequest
- Always reference openapi.json for field names, types, required/optional status, and validation
- All components must be self-contained and reference only files within this module
