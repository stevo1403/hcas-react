# Patient Management Endpoints

## GET /api/auth/patients/
- List all patients
- Response: `[PatientProfileResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchPatients = async (params) => {
  const response = await axios.get('/api/auth/patients/', { params });
  return response.data;
};

// React Query hook
export const usePatients = (filters = {}) => {
  return useQuery(['patients', filters], () => fetchPatients(filters));
};
```

## POST /api/auth/patients/
- Register a new patient (self or staff)
- Request: `PatientProfileCreateRequest`
- Response: `PatientProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createPatient = async (data: PatientProfileCreateRequest) => {
  const response = await axios.post('/api/auth/patients/', data);
  return response.data;
};

// React Query hook
export const useCreatePatient = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createPatient, {
    onSuccess: () => {
      queryClient.invalidateQueries(['patients']);
    },
  });
};
```

## GET /api/auth/patients/{user_id}/
- Get patient profile by user ID
- Response: `PatientProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchPatientById = async (userId: number) => {
  const response = await axios.get(`/api/auth/patients/${userId}/`);
  return response.data;
};

// React Query hook
export const usePatient = (userId: number) => {
  return useQuery(['patients', userId], () => fetchPatientById(userId), {
    enabled: !!userId,
  });
};
```

## GET /api/auth/patients/email/{email}/
- Get patient profile by email
- Response: `PatientProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchPatientByEmail = async (email: string) => {
  const response = await axios.get(`/api/auth/patients/email/${encodeURIComponent(email)}/`);
  return response.data;
};

// React Query hook
export const usePatientByEmail = (email: string) => {
  return useQuery(['patients', 'email', email], () => fetchPatientByEmail(email), {
    enabled: !!email,
  });
};
```

## PUT /api/auth/patients/{user_id}/
- Update patient profile (admin/staff)
- Request: `PatientProfileUpdateRequest`
- Response: `PatientProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const updatePatient = async ({ 
  userId, 
  data 
}: { 
  userId: number; 
  data: PatientProfileUpdateRequest 
}) => {
  const response = await axios.put(`/api/auth/patients/${userId}/`, data);
  return response.data;
};

// React Query hook
export const useUpdatePatient = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updatePatient, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['patients']);
      queryClient.setQueryData(['patients', data.id], data);
    },
  });
};
```

## GET /api/reporting/reports/patient-demographics/
- Get patient demographics report (optionally filter by department)
- Response: `PatientDemographicsReport`

**React Query Implementation:**
```typescript
// Axios API call
const fetchPatientDemographics = async (departmentId?: number) => {
  const params = departmentId ? { department_id: departmentId } : {};
  const response = await axios.get('/api/reporting/reports/patient-demographics/', { params });
  return response.data;
};

// React Query hook
export const usePatientDemographics = (departmentId?: number) => {
  return useQuery(
    ['patientDemographics', departmentId], 
    () => fetchPatientDemographics(departmentId)
  );
};
```
