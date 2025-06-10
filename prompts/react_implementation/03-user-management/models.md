# User Management Models

## TypeScript Interfaces

```typescript
// User model
interface User {
  id: string;
  email: string;
  role: 'patient' | 'staff' | 'admin';
  name: string;
  department?: Department;
  [key: string]: any; // For additional properties from API
}

// Department model
interface Department {
  id: string;
  name: string;
  staff?: User[];
}

// User State (Redux)
interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}

// Department State (Redux)
interface DepartmentState {
  departments: Department[];
  selectedDepartment: Department | null;
  isLoading: boolean;
  error: string | null;
}

// Update User Request
interface UpdateUserRequest {
  name?: string;
  email?: string;
  department?: string; // Department ID
  [key: string]: any; // For additional properties
}

// Create Department Request
interface CreateDepartmentRequest {
  name: string;
  [key: string]: any; // For additional properties
}

// Update Department Request
interface UpdateDepartmentRequest {
  name?: string;
  [key: string]: any; // For additional properties
}
```

## Notes
- All interfaces should be imported/used in Formik forms and API calls
- Use Yup validation schemas that match these interfaces
- Extract validation rules from OpenAPI schema when available
- Use TypeScript generics for API response types 