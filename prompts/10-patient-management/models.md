# Patient Management Models

## TypeScript Interfaces

```typescript
// Base Response interface
interface BaseResponse {
  ok: boolean;
  error?: string | null;
  message?: string | null;
}

// Patient Profile Create Request
interface PatientProfileCreateRequest {
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  next_of_kin?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
  auto_verify?: boolean | null;
}

// Patient Profile Update Request
interface PatientProfileUpdateRequest {
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  next_of_kin?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
}

// Patient Profile Response
interface PatientProfileResponse extends BaseResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  next_of_kin?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
}

// Patient Demographics Report
interface PatientDemographicsReport extends BaseResponse {
  total_patients: number;
  active_patients: number;
  inactive_patients: number;
  gender_distribution: {
    male: number;
    female: number;
    other: number;
    not_specified: number;
  };
  age_distribution?: {
    [key: string]: number; // e.g., "18-24": 45, "25-34": 78
  };
}
```

## Yup Validation Schemas

```typescript
// Patient Profile Create Validation
const patientProfileCreateSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  gender: Yup.string().nullable(),
  next_of_kin: Yup.string().nullable(),
  phone_no: Yup.string().nullable(),
  profile_picture: Yup.string().nullable(),
  bio: Yup.string().nullable(),
  matric_no: Yup.string().nullable(),
  is_active: Yup.boolean().required('Active status is required'),
  disabled: Yup.boolean().required('Disabled status is required'),
  auto_verify: Yup.boolean().nullable()
});

// Patient Profile Update Validation
const patientProfileUpdateSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  gender: Yup.string().nullable(),
  next_of_kin: Yup.string().nullable(),
  phone_no: Yup.string().nullable(),
  profile_picture: Yup.string().nullable(),
  bio: Yup.string().nullable(),
  matric_no: Yup.string().nullable(),
  is_active: Yup.boolean().required('Active status is required'),
  disabled: Yup.boolean().required('Disabled status is required')
});
```
