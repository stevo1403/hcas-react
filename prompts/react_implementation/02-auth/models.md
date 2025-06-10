# Authentication Models

## TypeScript Interfaces

```typescript
// User model
interface User {
  id: string;
  email: string;
  role: 'patient' | 'staff' | 'admin';
  name: string;
  [key: string]: any; // For additional properties from API
}

// Auth Token model
interface AuthToken {
  token: string;
  expires: string; // ISO date string
}

// Auth State (Redux)
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Login Request
interface LoginRequest {
  email: string;
  password: string;
}

// Register Request
interface RegisterRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
  next_of_kin: string;
  matric_no: string;
  phone_no?: string;
  country?: string;
  role: 'patient';
}

// Password Reset Request
interface PasswordResetRequest {
  email: string;
}
```

## Notes
- All interfaces should be imported/used in Formik forms and API calls
- Use Yup validation schemas that match these interfaces
- Extract validation rules from OpenAPI schema when available 