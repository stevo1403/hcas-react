# Attachment/File Management Module

## User Flows
- Upload files (images, PDFs, documents) to patient records, visits, or other entities
- View/download attachments
- Delete attachments (admin/staff only)
- Preview images and supported file types in-app
- Filter/search attachments by type, date, uploader, or related entity

## Web Implementation (React + Material UI)
- Use React Router for attachment routes
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- Material UI components:
  - DataGrid/Table for attachment listing with search, filter, and sort
  - Paper/Card for attachment preview
  - Dialog for upload modal
  - DropZone for drag-and-drop uploads
  - Image/PDF viewers for previews
  - Progress indicators for uploads
  - Confirmation dialogs for deletions
  - Alert components for success/error feedback
- Integration with react-dropzone for file uploads
- Formik + Yup for form handling and validation
- Role-based access control (delete permissions)
- Integration with PDF.js for PDF preview
- Lightbox for image preview

## Native Implementation (React Native + Paper)
- Use React Navigation for attachment screens
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- React Native Paper components:
  - DataTable for attachment listing
  - Card for attachment preview
  - Modal for upload interface
  - File picker integration
  - Progress indicators for uploads
  - Image viewers for previews
  - Dialog for confirmations
  - Snackbar for success/error feedback
- Integration with react-native-document-picker
- Formik + Yup for form handling and validation
- Role-based access control (delete permissions)
- Integration with react-native-pdf for PDF preview
- Image viewer component for image preview

## Common Elements
- TypeScript interfaces for all models and requests
- Extract validation schemas from OpenAPI specification
- Loading indicators for async operations
- Error handling and user feedback
- Permission-based UI rendering
- File type validation and size restrictions
- Follow branding guidelines (colors, fonts, etc.)
- Accessibility support (ARIA for web, Accessibility API for native)
- Dark mode support
- Comprehensive unit and integration tests

## Automation & API Alignment
- All forms and data-driven screens must extract fields, types, and validation from openapi.json
- Endpoints: /api/attachments/, /api/attachments/{id}/, (and any nested under visits, records, etc.)
- Models: AttachmentRequest, AttachmentResponse
- Always reference openapi.json for field names, types, required/optional status, and validation
- All components must be self-contained and reference only files within this module
