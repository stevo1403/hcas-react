# Lab Results Module

## User Flows
- Patients: View their lab results (list, detail, download/preview if file-based)
- Doctors: View lab results for their patients
- Lab Technicians: Upload, update, and finalize lab results
- Request new lab tests (doctor only)
- View pending and completed lab requests

## Web Implementation (React + Material UI)
- Use React Router for lab results routes
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- Material UI components:
  - DataGrid/Table for lab results listing with search and filter
  - Paper/Card for lab result details
  - Dialog for upload/edit forms
  - Tabs for organizing different result types
  - File viewers for PDFs/images
  - Stepper for multi-step result submission
  - Confirmation dialogs for actions
  - Alert components for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (different views for patients, doctors, lab techs)
- File upload with progress indication
- PDF.js or similar for document preview

## Native Implementation (React Native + Paper)
- Use React Navigation for lab results screens
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- React Native Paper components:
  - DataTable for lab results listing
  - Card for lab result details
  - Modal for upload/edit forms
  - Tab view for organizing different result types
  - Document viewer for PDFs/images
  - Dialog for confirmations
  - Snackbar for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (different views for patients, doctors, lab techs)
- File upload with progress indication
- Document viewer integration for PDF/image files

## Common Elements
- TypeScript interfaces for all models and requests
- Extract validation schemas from OpenAPI specification
- Loading indicators for async operations
- Error handling and user feedback
- Permission-based UI rendering
- Status indicators for lab results (pending, completed, finalized)
- Follow branding guidelines (colors, fonts, etc.)
- Accessibility support (ARIA for web, Accessibility API for native)
- Dark mode support
- Comprehensive unit and integration tests

## Automation & API Alignment
- All forms and data-driven screens must extract fields, types, and validation from openapi.json
- Endpoints: /api/medical/labtests/, /api/medical/visits/{visit_id}/labrequests/, /api/medical/labrequests/{labrequest_id}/result/
- Models: LabTestRequest, LabTestResponse, LabRequestRequest, LabRequestResponse, LabResultRequest, LabResultResponse
- Always reference openapi.json for field names, types, required/optional status, and validation
- All components must be self-contained and reference only files within this module 