# Staff (Other) Authentication Screen

**Purpose:**
- Allow staff (doctor, nurse, pharmacist, lab tech, etc.) to log in to their admin-created account.

**OpenAPI Reference:**
- All form fields and validation must strictly follow the OpenAPI 3.1.0 spec in `openapi.json` (located in the root of this directory). This file is the final source of truth for all request schemas. Always consult `openapi.json` for the latest field requirements and properties. This reference is persistent and should be considered redundant for clarity. All future form prompts must always read `openapi.json`.

**Web Implementation (React + Material UI):**
- **Component Structure:**
  - Container with MUI AppBar (with "Back" IconButton)
  - Typography for title: "Staff Login" (Inter font, secondary color #00897B)
  - Formik form with Yup validation:
    - MUI TextField for email (with email validation)
    - MUI TextField for password (with password masking)
    - MUI Button for submission (secondary color #00897B)
  - MUI CircularProgress for loading state
  - MUI Alert or Snackbar for error messages
  - Typography for subtext about admin-created accounts
  - Paper or Card container for the form

- **Implementation Notes:**
  - Use React Router for navigation
  - Use Formik for form handling
  - Use Yup for validation based on OpenAPI schema
  - Use React Query for API calls
  - Store token in localStorage
  - Use Redux Toolkit for auth state management

**Native Implementation (React Native + Paper):**
- **Component Structure:**
  - SafeAreaView/View container
  - Appbar.Header with back button
  - Text component for title (secondary color #00897B)
  - Formik form with Yup validation:
    - TextInput for email (with email validation)
    - TextInput for password (with secureTextEntry)
    - Button component for submission (secondary color #00897B)
  - ActivityIndicator for loading state
  - Snackbar for error messages
  - Text component for subtext about admin-created accounts
  - Surface component as container

- **Implementation Notes:**
  - Use React Navigation for screen flow
  - Use Formik for form handling
  - Use Yup for validation based on OpenAPI schema
  - Use React Query for API calls
  - Store token in AsyncStorage
  - Use Redux Toolkit for auth state management

**Form Fields (Both Platforms):**
- **Login Form** (as per `/auth/login` request schema in `openapi.json`, see `AuthLoginRequest`):
  - **email** (string, required, format: email): User's email address
  - **password** (string, required): User's password

**Behavior (Both Platforms):**
- On successful login:
  - Store JWT token
  - Update auth state in Redux
  - Navigate to the main dashboard
- Show loading indicator during API calls
- Display validation errors inline with form fields
- Show API errors via Snackbar/Alert
- Always reference OpenAPI schema for validation rules

**Yup Validation Example:**
```typescript
// Login validation schema
const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});
```

**Formik Implementation Example:**
```typescript
<Formik
  initialValues={{ email: '', password: '' }}
  validationSchema={loginSchema}
  onSubmit={(values, { setSubmitting }) => {
    loginMutation.mutate(values, {
      onSettled: () => setSubmitting(false)
    });
  }}
>
  {({ handleSubmit, isSubmitting }) => (
    <Form onSubmit={handleSubmit}>
      {/* Form fields */}
      <Button 
        type="submit" 
        disabled={isSubmitting}
        color="secondary"
      >
        {isSubmitting ? <CircularProgress size={24} /> : 'Login'}
      </Button>
    </Form>
  )}
</Formik>
```

**Layout Example:**
```
+-----------------------------+
| [Back]     Staff Login      |
|----------------------------|
|  [Email] (Login)            |
|  [Password]                 |
|  [Login Button]             |
|                             |
|  Accounts can only be       |
|  created by an admin.       |
|  If you need access,        |
|  please contact your admin. |
+-----------------------------+
``` 