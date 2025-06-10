# Appointments Module

## User Flows
- Patients: Book, reschedule, cancel appointments
- Staff: Approve/reject appointment requests, view all appointments
- Admin: Manage all appointments, generate reports

## Web Implementation (React + Material UI)
- Use React Router for appointment routes
- Use Formik + Yup for appointment forms
- Use Redux Toolkit for local appointment state
- Use React Query for data fetching with caching
- Material UI components:
  - DataGrid/Table for appointments list
  - DateTimePicker for scheduling
  - Dialogs for confirmations
  - Cards for appointment details
  - Buttons for actions (approve/reject/cancel)
- Role-based views and actions

## Native Implementation (React Native + Paper)
- Use React Navigation for appointment screens
- Use Formik + Yup for appointment forms
- Use Redux Toolkit for local appointment state
- Use React Query for data fetching with caching
- React Native Paper components:
  - FlatList for appointments
  - DateTimePicker for scheduling
  - Dialogs for confirmations
  - Cards for appointment details
  - Buttons for actions (approve/reject/cancel)
- Role-based views and actions

## Common Elements
- TypeScript interfaces for all models and requests
- Validation schemas based on OpenAPI spec
- Loading indicators for async operations
- Error handling and user feedback
- Pagination for large lists
- Sorting and filtering options
- Status indicators (color-coded)
- Responsive layouts for all screen sizes 