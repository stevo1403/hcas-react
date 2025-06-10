# Medical Records Module

## User Flows
- Doctors: Create, update, finalize medical records
- Patients: View own medical records
- Lab test uploads (PDF, images)
- Filter and search records

## Web Implementation (React + Material UI)
- Use React Router for medical record routes
- Use Formik + Yup for medical record forms
- Use Redux Toolkit for local record state
- Use React Query for data fetching with caching
- Material UI components:
  - Cards for medical record display
  - Rich text editor for symptoms/diagnosis/treatment
  - File upload component with preview
  - Dialogs for confirmations
  - DataGrid for listing records
- Role-based views and actions
- PDF viewer integration

## Native Implementation (React Native + Paper)
- Use React Navigation for medical record screens
- Use Formik + Yup for medical record forms
- Use Redux Toolkit for local record state
- Use React Query for data fetching with caching
- React Native Paper components:
  - Cards for medical record display
  - TextInput components for symptoms/diagnosis/treatment
  - Document picker for file uploads
  - Dialogs for confirmations
  - FlatList for record listings
- Role-based views and actions
- PDF viewer integration

## Common Elements
- TypeScript interfaces for all models and requests
- Validation schemas based on OpenAPI spec
- Loading indicators for async operations
- Error handling and user feedback
- Pagination for large lists
- Sorting and filtering options
- Status indicators (finalized/draft)
- File upload progress indicators
- Responsive layouts for all screen sizes 