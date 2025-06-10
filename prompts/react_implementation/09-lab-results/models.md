# Lab Results Models

## TypeScript Interfaces

```typescript
// Base Response interface
interface BaseResponse {
  ok: boolean;
  error?: string | null;
  message?: string | null;
}

// Lab Test Request
interface LabTestRequest {
  name: string;
  description: string | null;
}

// Lab Test Response
interface LabTestResponse extends BaseResponse {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

// Lab Request Request
interface LabRequestRequest {
  test_id: number;
}

// Lab Request Response
interface LabRequestResponse extends BaseResponse {
  id: number;
  test: LabTestResponse;
  status: string;
  requested_by: number | null;
  created_at: string;
  updated_at: string;
}

// Lab Result Request
interface LabResultRequest {
  result: string;
}

// Lab Result Response
interface LabResultResponse extends BaseResponse {
  id: number;
  result: string;
  recorded_by: number | null;
  created_at: string;
  updated_at: string;
}
```

## Yup Validation Schemas

```typescript
// Lab Test Validation
const labTestSchema = Yup.object({
  name: Yup.string().required('Test name is required'),
  description: Yup.string().nullable()
});

// Lab Request Validation
const labRequestSchema = Yup.object({
  test_id: Yup.number().required('Test ID is required')
});

// Lab Result Validation
const labResultSchema = Yup.object({
  result: Yup.string().required('Result is required')
});
```
