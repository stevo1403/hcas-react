# Appointment Models

## TypeScript Interfaces

```typescript
// Appointment Status Type
type AppointmentStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

// Appointment Model
interface Appointment {
  id: string;
  patient_id: string;
  staff_id: string;
  datetime: string; // ISO date string
  reason: string;
  status: AppointmentStatus;
  patient?: User; // Optional populated relationship
  staff?: User; // Optional populated relationship
  created_at?: string;
  updated_at?: string;
}

// Appointment List Response
interface AppointmentListResponse {
  appointments: Appointment[];
  page: number;
  size: number;
  total: number;
}

// Create Appointment Request
interface CreateAppointmentRequest {
  patient_id: string;
  staff_id?: string; // May be assigned later
  datetime: string; // ISO date string
  reason: string;
}

// Update Appointment Request
interface UpdateAppointmentRequest {
  datetime?: string; // ISO date string
  reason?: string;
  status?: AppointmentStatus;
}

// Appointment State (Redux)
interface AppointmentState {
  appointments: Appointment[];
  selectedAppointment: Appointment | null;
  pagination: {
    page: number;
    size: number;
    total: number;
  };
  filters: {
    status?: AppointmentStatus;
    fromDate?: string;
    toDate?: string;
    patientId?: string;
    staffId?: string;
  };
  isLoading: boolean;
  error: string | null;
}
```

## Notes
- All interfaces should be imported/used in Formik forms and API calls
- Use Yup validation schemas that match these interfaces
- Extract validation rules from OpenAPI schema when available
- Use date-fns or similar for date formatting/manipulation
- Status values should match API expectations exactly 