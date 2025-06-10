# Patient Management Module

## User Flows
- Register a new patient (self-registration or by staff)
- View patient list (search, filter, sort)
- View patient profile/details
- Edit/update patient profile (admin/staff)
- Deactivate/reactivate patient account (admin/staff)
- View patient demographics (reporting)

## Web Implementation (React + Material UI)
- Use React Router for patient management routes
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- Material UI components:
  - DataGrid/Table for patient listing with search, filter, and sort
  - Paper/Card for patient profile details
  - Dialog for create/edit forms
  - Tabs for organizing different sections of patient data
  - Charts for demographics reporting
  - Confirmation dialogs for actions
  - Alert components for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (different views/permissions for patients, staff, admin)
- Export data functionality (CSV, PDF)

## Native Implementation (React Native + Paper)
- Use React Navigation for patient management screens
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- React Native Paper components:
  - DataTable for patient listing
  - Card for patient profile details
  - Modal for create/edit forms
  - Tab view for organizing different sections of patient data
  - Simple charts for demographics reporting
  - Dialog for confirmations
  - Snackbar for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (different views/permissions for patients, staff, admin)
- Limited export capabilities

## Common Elements
- TypeScript interfaces for all models and requests
- Extract validation schemas from OpenAPI specification
- Loading indicators for async operations
- Error handling and user feedback
- Permission-based UI rendering
- Status indicators for patient accounts (active, disabled)
- Follow branding guidelines (colors, fonts, etc.)
- Accessibility support (ARIA for web, Accessibility API for native)
- Dark mode support
- Comprehensive unit and integration tests

## Automation & API Alignment
- All forms and data-driven screens must extract fields, types, and validation from openapi.json
- Endpoints: /api/auth/patients/, /api/auth/patients/{user_id}/, /api/auth/patients/email/{email}/, /api/reporting/reports/patient-demographics/
- Models: PatientProfileCreateRequest, PatientProfileUpdateRequest, PatientProfileResponse
- Always reference openapi.json for field names, types, required/optional status, and validation
- All components must be self-contained and reference only files within this module 