# Admin Dashboard Models

## TypeScript Interfaces

```typescript
// User Model
interface User {
  id: string;
  email: string;
  role: string;
  name: string;
  department?: Department;
}

// Department Model
interface Department {
  id: string;
  name: string;
  staff?: User[];
}

// Audit Log Model
interface AuditLog {
  id: string;
  action: string;
  user_id: string;
  timestamp: string;
  details: string;
}

// Setting Model
interface Setting {
  key: string;
  value: string;
}

// Analytics Model
interface Analytics {
  users: {
    total: number;
    by_role: Record<string, number>;
  };
  appointments: {
    total: number;
    by_status: Record<string, number>;
  };
  medical_records: {
    total: number;
  };
  departments: {
    count: number;
  };
}
```

## Notes
- All interfaces should be imported/used in components and API calls
- Use TypeScript generics for API response types
- Use date-fns or similar for date formatting/manipulation
- Consider using more specific types for analytics data based on actual API responses
- Admin dashboard typically needs more comprehensive models than other modules 