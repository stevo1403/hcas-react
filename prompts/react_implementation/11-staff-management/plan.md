# Staff Management Module

## User Flows
- Register/onboard new staff (admin only)
- View staff list (search, filter, sort)
- View staff profile/details
- Edit/update staff profile (admin only)
- Assign roles and permissions (admin only)
- Deactivate/reactivate staff account (admin only)
- View staff roles and permissions

## Web Implementation (React + Material UI)
- Use React Router for staff management routes
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- Material UI components:
  - DataGrid/Table for staff listing with search, filter, and sort
  - Paper/Card for staff profile details
  - Dialog for create/edit forms
  - Tabs for organizing different sections of staff data
  - Multi-select, Autocomplete, and Chip components for role/permission assignment
  - Confirmation dialogs for actions
  - Alert components for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (admin only features)
- Export data functionality (CSV, PDF)

## Native Implementation (React Native + Paper)
- Use React Navigation for staff management screens
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- React Native Paper components:
  - DataTable for staff listing
  - Card for staff profile details
  - Modal for create/edit forms
  - Tab view for organizing different sections of staff data
  - MultiSelect and Chip components for role/permission assignment
  - Dialog for confirmations
  - Snackbar for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (admin only features)
- Limited export capabilities

## Common Elements
- TypeScript interfaces for all models and requests
- Extract validation schemas from OpenAPI specification
- Loading indicators for async operations
- Error handling and user feedback
- Permission-based UI rendering
- Status indicators for staff accounts (active, disabled)
- Follow branding guidelines (colors, fonts, etc.)
- Accessibility support (ARIA for web, Accessibility API for native)
- Dark mode support
- Comprehensive unit and integration tests

## Automation & API Alignment
- All forms and data-driven screens must extract fields, types, and validation from openapi.json
- Endpoints: /api/auth/staff/, /api/auth/staff/{user_id}/, /api/auth/staff/email/{email}/, /api/roles/, /api/permissions/
- Models: StaffProfileCreateRequest, StaffProfileUpdateRequest, StaffProfileResponse, RoleSchema, PermissionSchema
- Always reference openapi.json for field names, types, required/optional status, and validation
- All components must be self-contained and reference only files within this module 