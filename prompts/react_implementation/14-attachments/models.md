# Attachment/File Management Models

## TypeScript Interfaces

```typescript
// Base Response interface
interface BaseResponse {
  ok: boolean;
  error?: string | null;
  message?: string | null;
}

// Attachment Request
interface AttachmentRequest {
  file: File;
  description?: string | null;
  related_entity_id?: number | null;
}

// Attachment Response
interface AttachmentResponse extends BaseResponse {
  id: number;
  file: string;
  description?: string | null;
  uploaded_by?: number | null;
  created_at: string;
}
```

## Yup Validation Schemas

```typescript
// Attachment Validation
const attachmentSchema = Yup.object({
  file: Yup.mixed().required('File is required'),
  description: Yup.string().nullable(),
  related_entity_id: Yup.number().nullable()
});
```
