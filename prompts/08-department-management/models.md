# Department Management Models

## TypeScript Interfaces

```typescript
// Base Response interface
interface BaseResponse {
  ok: boolean;
  error?: string | null;
  message?: string | null;
}

// Department Create Request
interface DepartmentCreateRequest {
  name: string;
  description?: string | null;
  head?: number | null;
  staff?: number[] | null;
}

// Department Update Request
interface DepartmentUpdateRequest {
  name?: string | null;
  description?: string | null;
  head?: number | null;
  staff?: number[] | null;
}

// Department Response
interface DepartmentResponse extends BaseResponse {
  id: number;
  name: string;
  description?: string | null;
  head?: number | null;
  staff?: number[];
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

// Department List Response
interface DepartmentListResponse extends BaseResponse {
  departments: DepartmentResponse[];
}

// Department Staff Assignment Request
interface DepartmentStaffAssignmentRequest {
  staff_ids: number[];
}

// Department User (for populated data)
interface DepartmentUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Department with Populated Data (for UI)
interface DepartmentWithPopulatedData {
  id: number;
  name: string;
  description?: string | null;
  head?: DepartmentUser | null;
  staff: DepartmentUser[];
  created_at: string;
  updated_at: string;
}

// Department State (Redux)
interface DepartmentState {
  departments: DepartmentResponse[];
  selectedDepartment: DepartmentResponse | null;
  isLoading: boolean;
  error: string | null;
}
```

## Yup Validation Schemas

```typescript
// Department Create/Update Validation
const departmentSchema = Yup.object({
  name: Yup.string().required('Department name is required'),
  description: Yup.string().nullable(),
  head: Yup.number().nullable(),
  staff: Yup.array().of(Yup.number()).nullable()
});

// Staff Assignment Validation
const staffAssignmentSchema = Yup.object({
  staff_ids: Yup.array().of(Yup.number()).required('Staff IDs are required')
});
```

## Notes
- All interfaces and validation schemas should be imported/used in forms and API calls
- Validate the data structure against openapi.json to ensure compatibility
- Consider creating TypeScript type guards to ensure type safety 