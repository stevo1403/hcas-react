# Staff Management Models

## TypeScript Interfaces

```typescript
// Base Response interface
interface BaseResponse {
  ok: boolean;
  error?: string | null;
  message?: string | null;
}

// Role Schema
interface RoleSchema {
  id: number;
  name: string;
  description: string | null;
}

// Permission Schema
interface PermissionSchema {
  id: number;
  codename: string;
  description: string | null;
}

// Staff Profile Create Request
interface StaffProfileCreateRequest {
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
  roles?: number[] | null;
  permissions?: number[] | null;
}

// Staff Profile Update Request
interface StaffProfileUpdateRequest {
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
  roles?: number[] | null;
  permissions?: number[] | null;
}

// Staff Profile Response
interface StaffProfileResponse extends BaseResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
  roles?: RoleSchema[];
  permissions?: PermissionSchema[];
}
```

## Yup Validation Schemas

```typescript
// Staff Profile Create Validation
const staffProfileCreateSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  gender: Yup.string().nullable(),
  phone_no: Yup.string().nullable(),
  profile_picture: Yup.string().nullable(),
  bio: Yup.string().nullable(),
  matric_no: Yup.string().nullable(),
  is_active: Yup.boolean().required('Active status is required'),
  disabled: Yup.boolean().required('Disabled status is required'),
  roles: Yup.array().of(Yup.number()).nullable(),
  permissions: Yup.array().of(Yup.number()).nullable()
});

// Staff Profile Update Validation
const staffProfileUpdateSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  gender: Yup.string().nullable(),
  phone_no: Yup.string().nullable(),
  profile_picture: Yup.string().nullable(),
  bio: Yup.string().nullable(),
  matric_no: Yup.string().nullable(),
  is_active: Yup.boolean().required('Active status is required'),
  disabled: Yup.boolean().required('Disabled status is required'),
  roles: Yup.array().of(Yup.number()).nullable(),
  permissions: Yup.array().of(Yup.number()).nullable()
});
```
