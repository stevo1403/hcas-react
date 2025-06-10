# Health Center Automation System (HCAS) - Frontend Implementation

## Project Specifications

Create a comprehensive Health Center Automation System (HCAS) frontend with the following specifications:

### Tech Stack
- React 18+
- TypeScript 5+
- Material UI 5+ (for web)
- Redux Toolkit for state management
- React Router v6 for routing
- Formik + Yup for forms and validation
- React Query v4+ for API data fetching
- Axios for HTTP requests
- JWT for authentication
- Jest + React Testing Library for testing
- ESLint + Prettier for code quality

### Folder Structure
```
/src
  /assets            # Static assets (images, fonts, etc.)
  /components        # Reusable UI components
    /common          # Shared components (buttons, inputs, etc.)
    /layouts         # Layout components
    /[module-name]   # Module-specific components
  /features          # Feature modules
    /auth            # Authentication module
    /users           # User management
    /appointments    # Appointment scheduling
    /medical-records # Medical records
    /lab-results     # Lab results
    /patients        # Patient management
    /staff           # Staff management
    /pharmacy        # Pharmacy management
    /departments     # Department management
    /notifications   # Notifications
    /admin           # Admin dashboard
    /settings        # User settings
    /attachments     # File attachments
  /hooks             # Custom React hooks
  /services          # API services
  /store             # Redux store configuration
    /slices          # Redux slices
  /types             # TypeScript type definitions
  /utils             # Utility functions
  /theme             # Theme configuration
  /config            # App configuration
  /routes            # Application routes
```

## Application Modules

### Authentication Module
Implement a complete authentication system with:
- Login page with form validation
- Registration page for new users
- Password recovery workflow
- JWT token handling with refresh tokens
- Protected route handling
- Role-based access control (Patient, Doctor, Nurse, Admin, etc.)

### Core UI Components
Create the following core UI components:

#### Layout Components
- Main layout with responsive sidebar navigation
- Dashboard layout with stats cards
- Authentication layout (for login/register)
- Error pages (404, 403, 500)

#### Navigation Components
- Sidebar navigation with collapsible sections
- Breadcrumb navigation
- Mobile-responsive navigation drawer

#### Common UI Components
- Data table with sorting, filtering, pagination
- Form components (inputs, selects, date pickers, etc.)
- Modal/dialog components
- Card components
- Alert/notification components
- Loading indicators
- File upload components with progress

### Theme Configuration
Implement a comprehensive theming system with:
- Primary color palette based on healthcare themes
- Light/dark mode toggle
- Responsive typography
- Custom component styling

### Dashboard Module
Create a dashboard with:
- Key metrics cards (appointments, patients, etc.)
- Recent activity feed
- Charts for data visualization (appointments by day, patients by department, etc.)
- Quick action buttons

### Patient Management Module
Implement patient management with:
- Patient listing with search and filters
- Patient profile view/edit
- Patient registration form
- Medical history view
- Appointments history

### Appointment Scheduling Module
Create appointment management with:
- Calendar view of appointments
- Appointment booking form
- Appointment approval workflow
- Appointment rescheduling/cancellation
- Appointment reminder notifications

### Medical Records Module
Implement medical records with:
- Patient visit history
- Medical record creation form
- Diagnosis and treatment plan sections
- Prescription management
- Lab test requests

### Lab Results Module
Create lab results management with:
- Lab test listing
- Lab test result entry form
- Result viewing interface
- Result history

### Pharmacy Management Module
Implement pharmacy features with:
- Drug inventory management
- Prescription dispensing workflow
- Stock management and alerts
- Medication history

### Settings Module
Create settings pages with:
- User profile settings
- Notification preferences
- Theme customization
- System settings (admin only)

### File Attachments Module
Implement file management with:
- File upload component with drag-and-drop
- File preview (images, PDFs)
- File listing with filters
- File deletion

## API Integration

### API Configuration
- Create a base Axios instance with:
  - API base URL configuration
  - Request/response interceptors
  - Authentication header handling
  - Error handling

### React Query Implementation
- Setup React Query client with:
  - Default configuration (stale time, caching)
  - Global error handling
  - Loading state management
  - Custom hooks for API endpoints

## State Management

### Redux Setup
- Configure Redux store with:
  - Auth slice for user authentication
  - UI slice for UI state (theme, sidebar, etc.)
  - Module-specific slices as needed

### Data Flow
- Use React Query for server state (API data)
- Use Redux for global application state
- Use React Context for theme and other UI concerns
- Use local component state for component-specific state

## Form Implementation

### Formik + Yup Integration
- Create reusable form components with:
  - Field-level validation
  - Form-level validation
  - Error message display
  - Custom form controls

### Common Form Patterns
- Implement multi-step forms for complex workflows
- Create dynamic form fields based on user selections
- Implement form submission with loading states
- Add autosave functionality for long forms

## Routing

### React Router Configuration
- Setup React Router with:
  - Public routes (login, register, etc.)
  - Protected routes (dashboard, settings, etc.)
  - Role-based route protection
  - Nested routes for complex views

## UI/UX Requirements

### Responsive Design
- Implement fully responsive layouts for:
  - Desktop (1200px+)
  - Tablet (768px-1199px)
  - Mobile (320px-767px)

### Accessibility
- Ensure WCAG 2.1 AA compliance:
  - Proper semantic HTML
  - ARIA attributes where needed
  - Keyboard navigation
  - Screen reader compatibility
  - Sufficient color contrast

### Performance Optimization
- Implement:
  - Code splitting for route-based components
  - Lazy loading for heavy components
  - Memoization for expensive calculations
  - Virtualized lists for long data sets

## Testing

### Jest + React Testing Library
- Write tests for:
  - Component rendering
  - User interactions
  - Redux state management
  - API integration

## Additional Features

### Error Handling
- Implement comprehensive error handling:
  - API error handling with user-friendly messages
  - Form validation errors
  - Network error detection and retry
  - Fallback UI for error states

### Internationalization
- Setup i18next for multi-language support:
  - English (default)
  - Additional languages as needed

### Analytics
- Implement analytics tracking:
  - Page views
  - User interactions
  - Error tracking

## Deployment Configuration
- Setup environment-specific configuration:
  - Development
  - Staging
  - Production

## Getting Started

To get started, create a new React TypeScript project using:

```bash
# Create React App
npx create-react-app hcas-frontend --template typescript

# OR with Vite
npm create vite@latest hcas-frontend -- --template react-ts
```

### Install Required Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid @mui/x-date-pickers
npm install @reduxjs/toolkit react-redux
npm install react-router-dom
npm install formik yup
npm install @tanstack/react-query axios
npm install date-fns
npm install jwt-decode
npm install react-dropzone
npm install recharts
npm install react-pdf
```

### Development Dependencies

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
npm install --save-dev @types/node @types/react @types/react-dom
```

## Implementation Strategy

1. Start with core setup: project structure, routing, theme, and layout components
2. Implement authentication module
3. Create dashboard and main navigation
4. Implement key modules in order:
   - Patient management
   - Appointment scheduling
   - Medical records
   - Lab results
   - Pharmacy management
5. Add supporting modules:
   - Settings
   - File attachments
   - Notifications
6. Implement admin-specific features
7. Add final polish: error handling, performance optimization, testing

## Design Guidelines

### Color Palette
- Primary: #2196F3 (blue)
- Secondary: #FF9800 (orange)
- Success: #4CAF50 (green)
- Error: #F44336 (red)
- Warning: #FF9800 (orange)
- Info: #2196F3 (blue)
- Background: #F5F5F5 (light gray)
- Paper: #FFFFFF (white)
- Text primary: #333333 (dark gray)
- Text secondary: #757575 (medium gray)

### Typography
- Font family: 'Roboto', 'Helvetica', 'Arial', sans-serif
- Headings: Bold, color #333333
- Body text: Regular, color #333333
- Secondary text: Regular, color #757575

### Spacing
- Use Material UI's spacing system (1 unit = 8px)
- Consistent padding/margin throughout the application

### Component Style
- Clean, minimalist healthcare aesthetic
- Rounded corners (4px border-radius)
- Subtle shadows for elevation
- Limited use of bold colors (primarily for actions and status indicators)

## API Integration

All API endpoints should be called using React Query hooks. The base URL for the API is `/api`.

Example API hook:

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '../services/axios';

// Fetch patients
export const usePatients = (filters = {}) => {
  return useQuery(['patients', filters], async () => {
    const response = await axios.get('/api/patients', { params: filters });
    return response.data;
  });
};

// Create patient
export const useCreatePatient = () => {
  const queryClient = useQueryClient();
  
  return useMutation(
    async (data) => {
      const response = await axios.post('/api/patients', data);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['patients']);
      },
    }
  );
};
```

## Deployment

The application should be built for production with:

```bash
npm run build
```

The build output will be in the `build` or `dist` directory, which can be deployed to any static hosting service.

## References

- Material UI documentation: https://mui.com/
- React Query documentation: https://tanstack.com/query/latest
- Redux Toolkit documentation: https://redux-toolkit.js.org/
- Formik documentation: https://formik.org/docs/overview
- React Router documentation: https://reactrouter.com/docs/en/v6 