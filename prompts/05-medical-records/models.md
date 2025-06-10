# Medical Record Models

## TypeScript Interfaces

```typescript
// Medical Record Model
interface MedicalRecord {
  id: string;
  patient_id: string;
  doctor_id: string;
  symptoms: string;
  diagnosis: string;
  treatment: string;
  finalized: boolean;
  lab_results?: LabResult[];
  created_at?: string;
  updated_at?: string;
  patient?: User; // Optional populated relationship
  doctor?: User; // Optional populated relationship
}

// Lab Result Model
interface LabResult {
  id: string;
  record_id: string;
  file_url: string;
  file_type?: string; // e.g., 'pdf', 'image'
  uploaded_at: string; // ISO date string
  name?: string; // Optional file name
  size?: number; // Optional file size in bytes
}

// Medical Record List Response
interface MedicalRecordListResponse {
  records: MedicalRecord[];
  page: number;
  size: number;
  total: number;
}

// Create Medical Record Request
interface CreateMedicalRecordRequest {
  patient_id: string;
  symptoms: string;
  diagnosis: string;
  treatment: string;
}

// Update Medical Record Request
interface UpdateMedicalRecordRequest {
  symptoms?: string;
  diagnosis?: string;
  treatment?: string;
  finalized?: boolean;
}

// Lab Upload Response
interface LabUploadResponse {
  lab_result: LabResult;
}

// Medical Record State (Redux)
interface MedicalRecordState {
  records: MedicalRecord[];
  selectedRecord: MedicalRecord | null;
  pagination: {
    page: number;
    size: number;
    total: number;
  };
  filters: {
    patientId?: string;
    doctorId?: string;
    finalized?: boolean;
    fromDate?: string;
    toDate?: string;
    searchTerm?: string;
  };
  isLoading: boolean;
  error: string | null;
  uploadProgress: number | null;
}
```

## Notes
- All interfaces should be imported/used in Formik forms and API calls
- Use Yup validation schemas that match these interfaces
- Extract validation rules from OpenAPI schema when available
- Use date-fns or similar for date formatting/manipulation
- Consider using rich text format for symptoms/diagnosis/treatment
- File uploads should support multiple formats (PDF, images) with proper validation 