# Medical Record Endpoints

## GET /medical-records
- List medical records for user (paginated)
- Response: `{ records: MedicalRecord[], page, size, total }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchMedicalRecords = async (params) => {
  const response = await axios.get('/medical-records', { params });
  return response.data;
};

// React Query hook
export const useMedicalRecords = (page = 1, size = 10, filters = {}) => {
  return useQuery(
    ['medicalRecords', page, size, filters],
    () => fetchMedicalRecords({ page, size, ...filters }),
    {
      keepPreviousData: true,
      staleTime: 30 * 1000, // 30 seconds
    }
  );
};
```

## POST /medical-records
- Create a new medical record (doctor only)
- Request: `{ patient_id, symptoms, diagnosis, treatment }`
- Response: `{ record: MedicalRecord }`

**React Query Implementation:**
```typescript
// Axios API call
const createMedicalRecord = async (data) => {
  const response = await axios.post('/medical-records', data);
  return response.data.record;
};

// React Query hook
export const useCreateMedicalRecord = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createMedicalRecord, {
    onSuccess: () => {
      queryClient.invalidateQueries(['medicalRecords']);
    },
  });
};
```

## PUT /medical-records/{id}
- Update/finalize medical record (doctor only)
- Request: `{ symptoms?, diagnosis?, treatment?, finalized? }`
- Response: `{ record: MedicalRecord }`

**React Query Implementation:**
```typescript
// Axios API call
const updateMedicalRecord = async ({ id, data }) => {
  const response = await axios.put(`/medical-records/${id}`, data);
  return response.data.record;
};

// React Query hook
export const useUpdateMedicalRecord = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateMedicalRecord, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['medicalRecords']);
      queryClient.setQueryData(['medicalRecords', data.id], data);
    },
  });
};
```

## POST /medical-records/{id}/lab-upload
- Upload lab test result (PDF, image)
- Request: file upload (multipart/form-data)
- Response: `{ lab_result: LabResult }`

**React Query Implementation:**
```typescript
// Axios API call
const uploadLabResult = async ({ id, file }) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await axios.post(`/medical-records/${id}/lab-upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      // Track upload progress if needed
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      // Update progress in state if needed
    },
  });
  
  return response.data.lab_result;
};

// React Query hook
export const useUploadLabResult = () => {
  const queryClient = useQueryClient();
  
  return useMutation(uploadLabResult, {
    onSuccess: (data, variables) => {
      // Invalidate and refetch medical record
      queryClient.invalidateQueries(['medicalRecords', variables.id]);
    },
  });
};
``` 