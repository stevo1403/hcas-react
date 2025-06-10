# Patient Authentication Screen

**Purpose:**
- Allow patients to either register a new account or log in to an existing one.

**OpenAPI Reference:**
- All form fields and validation must strictly follow the OpenAPI 3.1.0 spec in `openapi.json` (located in the root of this directory). This file is the final source of truth for all request schemas. Always consult `openapi.json` for the latest field requirements and properties. This reference is persistent and should be considered redundant for clarity.

**Web Implementation (React + Material UI):**
- **Component Structure:**
  - Container with MUI AppBar (with "Back" IconButton)
  - Typography for title: "Patient Access" (Inter font, primary color #2E7D32)
  - MUI Tabs component for switching between Register and Login
  - Two Tab Panels:
    - **Register Tab Panel:**
      - Formik form with Yup validation
      - MUI TextField components for all input fields (see below)
      - MUI Button for submission (primary color)
      - Link component to switch to Login tab
    - **Login Tab Panel:**
      - Formik form with Yup validation
      - MUI TextField components for email and password
      - MUI Button for submission (primary color)
      - Link component to switch to Register tab
  - MUI CircularProgress for loading states
  - MUI Snackbar for error messages

- **Implementation Notes:**
  - Use React Router for navigation
  - Use Formik for form handling
  - Use Yup for validation based on OpenAPI schema
  - Use React Query for API calls
  - Store token in localStorage or contextual state
  - Use Redux Toolkit for auth state management

**Native Implementation (React Native + Paper):**
- **Component Structure:**
  - SafeAreaView/View container
  - Appbar.Header with back button
  - Text component for title
  - Paper.SegmentedButtons for switching between Register and Login
  - Two Screens:
    - **Register Screen:**
      - Formik form with Yup validation
      - TextInput components for all fields (see below)
      - Button component for submission (primary color)
      - TouchableRipple to switch to Login
    - **Login Screen:**
      - Formik form with Yup validation
      - TextInput components for email and password
      - Button component for submission (primary color)
      - TouchableRipple to switch to Register
  - ActivityIndicator for loading states
  - Snackbar for error messages

- **Implementation Notes:**
  - Use React Navigation for screen flow
  - Use Formik for form handling
  - Use Yup for validation based on OpenAPI schema
  - Use React Query for API calls
  - Store token in AsyncStorage
  - Use Redux Toolkit for auth state management

**Form Fields (Both Platforms):**
- **Register Form** (as per `/auth/register` request schema in `openapi.json`, see `AuthRegisterRequest`):
  - **email** (string, required): User's email address
  - **password** (string, required): User's password
  - **first_name** (string, required): User's first name
  - **last_name** (string, required): User's last name
  - **gender** (string, required): 'M' for Male, 'F' for Female
  - **next_of_kin** (string, required): Next of kin
  - **matric_no** (string, required): Matriculation number (unique)
  - **phone_no** (string, optional): Phone number
  - **country** (string, optional, defaults to 'Nigeria'): Country
  - **confirm_password** (for UX, not sent to API)
  - (Role is set to 'patient' by default and not shown)

- **Login Form** (as per `/auth/login` request schema in `openapi.json`, see `AuthLoginRequest`):
  - **email** (string, required): User's email address
  - **password** (string, required): User's password

**Behavior (Both Platforms):**
- Switching between Register and Login tabs/segments is animated
- On successful registration or login:
  - Store JWT token
  - Update auth state in Redux
  - Navigate to the main dashboard
- Show loading indicator during API calls
- Display validation errors inline with form fields
- Show API errors via Snackbar/Alert
- Always reference OpenAPI schema for validation rules

**Yup Validation Example:**
```typescript
// Register validation schema
const registerSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  gender: Yup.string().oneOf(['M', 'F'], 'Select Male or Female').required('Gender is required'),
  next_of_kin: Yup.string().required('Next of kin is required'),
  matric_no: Yup.string().required('Matriculation number is required'),
  phone_no: Yup.string(),
  country: Yup.string().default('Nigeria')
});

// Login validation schema
const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});
```

**Layout Example:**
```
+-----------------------------+
| [Back]   Patient Access     |
|----------------------------|
| [ Register |  Login ]       |
|                             |
|  [Email] (Register)         |
|  [Password]                 |
|  [First Name]               |
|  [Last Name]                |
|  [Gender]                   |
|  [Next of Kin]              |
|  [Matric No]                |
|  [Phone No] (optional)      |
|  [Country] (optional)       |
|  [Confirm Password]         |
|  [Register Button]          |
|  [Switch to Login]          |
|----------------------------|
|  [Email] (Login)            |
|  [Password]                 |
|  [Login Button]             |
|  [Switch to Register]       |
+-----------------------------+ 