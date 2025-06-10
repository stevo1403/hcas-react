# User Management Module

## User Flows
- CRUD for patient and staff profiles
- Department management (list, create, update)
- Profile viewing and editing
- Role-based access control

## Web Implementation (React + Material UI)
- Use React Router for user management routes
- Use Formik + Yup for form handling and validation
- Use Redux Toolkit for user state management
- Use React Query for data fetching with caching
- Material UI components for tables, forms, and UI elements
- Protected routes with role-based authorization

## Native Implementation (React Native + Paper)
- Use React Navigation for user management screens
- Use Formik + Yup for form handling and validation
- Use Redux Toolkit for user state management
- Use React Query for data fetching with caching
- React Native Paper components for lists, forms, and UI elements
- Protected screens with role-based authorization

## Common Elements
- TypeScript interfaces for all models and requests
- Validation schemas based on OpenAPI spec
- Loading indicators for async operations
- Error handling and user feedback
- Form validation directly from OpenAPI schema
- Responsive layouts for all screen sizes
- Role-based UI rendering (admin/staff/patient) 