# Authentication Module

## User Flows
- Registration (email/password)
- Login (email/password)
- Password reset
- Role selection (patient vs. staff/other)
- JWT token storage and management

## Web Implementation (React + Material UI)
- Use React Router for authentication routes
- Use Formik + Yup for form handling and validation
- Use Redux Toolkit for auth state management
- Use Axios + React Query for API calls
- Store JWT token in localStorage
- Material UI components for forms and UI elements
- Protected routes via custom route guards

## Native Implementation (React Native + Paper)
- Use React Navigation for authentication flow
- Use Formik + Yup for form handling and validation
- Use Redux Toolkit for auth state management
- Use Axios + React Query for API calls
- Store JWT token in AsyncStorage
- React Native Paper components for forms and UI elements
- Protected screens via navigation state

## Common Elements
- TypeScript interfaces for all models and requests
- Validation schemas based on OpenAPI spec
- Loading spinners/indicators for async actions
- User-friendly error messages and handling
- Animated transitions between screens/routes
- Secure storage for tokens
- Form validation directly from OpenAPI schema
- Responsive layouts for all screen sizes 