# Department Management Module

## User Flows
- View all departments (list, search, filter)
- View department details (name, description, head, staff)
- Create a new department (admin only)
- Edit department details (admin only)
- Assign/remove staff to/from department (admin only)
- Delete department (admin only)

## Web Implementation (React + Material UI)
- Use React Router for department routes
- Use Redux Toolkit for local department state
- Use React Query for data fetching with caching
- Material UI components:
  - DataGrid/Table for department listing with search and filter
  - Paper/Card for department details
  - Dialog for create/edit forms
  - Autocomplete for staff assignment
  - Confirmation dialogs for delete actions
  - Alert components for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (admin only for mutations)
- Responsive design with Grid components

## Native Implementation (React Native + Paper)
- Use React Navigation for department screens
- Use Redux Toolkit for local department state
- Use React Query for data fetching with caching
- React Native Paper components:
  - DataTable for department listing
  - Card for department details
  - Modal for create/edit forms
  - Searchable dropdown for staff assignment
  - Dialog for confirmations
  - Snackbar for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (admin only for mutations)
- Responsive design with Dimensions API

## Common Elements
- TypeScript interfaces for all models and requests
- Extract validation schemas from OpenAPI specification
- Loading indicators for async operations
- Error handling and user feedback
- Permission-based UI rendering
- Follow branding guidelines (colors, fonts, etc.)
- Accessibility support (ARIA for web, Accessibility API for native)
- Dark mode support
- Comprehensive unit and integration tests

## Automation & API Alignment
- All forms and data-driven screens must extract fields, types, and validation from openapi.json
- Endpoints: /api/departments/, /api/departments/{id}/, /api/departments/{id}/staff/
- Models: DepartmentCreateRequest, DepartmentUpdateRequest, DepartmentResponse, DepartmentListResponse, DepartmentStaffAssignmentRequest
- Always reference openapi.json for field names, types, required/optional status, and validation
- All components must be self-contained and reference only files within this module 