# Pharmacy/Medication Management Module

## User Flows
- View drug inventory (list, search, filter, sort)
- Add new drugs to inventory (pharmacist/admin)
- Edit/update drug details (pharmacist/admin)
- Adjust drug stock (stock in/out, wastage, returns)
- View and process prescriptions (dispense drugs)
- View dispense records (history, search, filter)
- View and manage stock adjustments

## Web Implementation (React + Material UI)
- Use React Router for pharmacy management routes
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- Material UI components:
  - DataGrid/Table for drug inventory with search, filter, and sort
  - Paper/Card for drug details
  - Dialog for create/edit forms
  - Tabs for organizing different sections (inventory, prescriptions, dispense records)
  - Stepper for multi-step dispensing process
  - Chips for status indicators (in stock, low stock, expired)
  - Charts for inventory analytics
  - Confirmation dialogs for actions
  - Alert components for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (pharmacist/admin features)
- Export data functionality (CSV, PDF)
- Barcode scanning integration (optional)

## Native Implementation (React Native + Paper)
- Use React Navigation for pharmacy management screens
- Use Redux Toolkit for local state management
- Use React Query for data fetching with caching
- React Native Paper components:
  - DataTable for drug inventory
  - Card for drug details
  - Modal for create/edit forms
  - Tab view for organizing different sections
  - Stepper component for dispensing process
  - Chip components for status indicators
  - Simple charts for inventory analytics
  - Dialog for confirmations
  - Snackbar for success/error feedback
- Formik + Yup for form handling and validation
- Role-based access control (pharmacist/admin features)
- Limited export capabilities
- Camera integration for barcode scanning (optional)

## Common Elements
- TypeScript interfaces for all models and requests
- Extract validation schemas from OpenAPI specification
- Loading indicators for async operations
- Error handling and user feedback
- Permission-based UI rendering
- Status indicators for inventory items
- Follow branding guidelines (colors, fonts, etc.)
- Accessibility support (ARIA for web, Accessibility API for native)
- Dark mode support
- Comprehensive unit and integration tests

## Automation & API Alignment
- All forms and data-driven screens must extract fields, types, and validation from openapi.json
- Endpoints: /api/pharmacy/drugs/, /api/pharmacy/drugs/{drug_id}/stockadjustments/, /api/pharmacy/dispense/, /api/pharmacy/prescriptions/{prescription_id}/dispense/, /api/medical/visits/{visit_id}/prescriptions/
- Models: DrugInventoryRequest, DrugInventoryResponse, StockAdjustmentRequest, StockAdjustmentResponse, PrescriptionRequest, PrescriptionResponse, DispenseRecordRequest, DispenseRecordResponse
- Always reference openapi.json for field names, types, required/optional status, and validation
- All components must be self-contained and reference only files within this module
