# Lab Results Endpoints

## GET /api/medical/labtests/
- List all lab tests
- Response: `[LabTestResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchLabTests = async () => {
  const response = await axios.get('/api/medical/labtests/');
  return response.data;
};

// React Query hook
export const useLabTests = () => {
  return useQuery(['labTests'], fetchLabTests);
};
```

## POST /api/medical/labtests/
- Create a new lab test (admin/lab tech)
- Request: `LabTestRequest`
- Response: `LabTestResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createLabTest = async (data: LabTestRequest) => {
  const response = await axios.post('/api/medical/labtests/', data);
  return response.data;
};

// React Query hook
export const useCreateLabTest = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createLabTest, {
    onSuccess: () => {
      queryClient.invalidateQueries(['labTests']);
    },
  });
};
```

## GET /api/medical/visits/{visit_id}/labrequests/
- List lab requests for a visit
- Response: `[LabRequestResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchLabRequests = async (visitId: number) => {
  const response = await axios.get(`/api/medical/visits/${visitId}/labrequests/`);
  return response.data;
};

// React Query hook
export const useLabRequests = (visitId: number) => {
  return useQuery(['labRequests', visitId], () => fetchLabRequests(visitId), {
    enabled: !!visitId,
  });
};
```

## POST /api/medical/visits/{visit_id}/labrequests/
- Create a new lab request for a visit (doctor only)
- Request: `LabRequestRequest`
- Response: `LabRequestResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createLabRequest = async ({ 
  visitId, 
  data 
}: { 
  visitId: number; 
  data: LabRequestRequest 
}) => {
  const response = await axios.post(`/api/medical/visits/${visitId}/labrequests/`, data);
  return response.data;
};

// React Query hook
export const useCreateLabRequest = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createLabRequest, {
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['labRequests', variables.visitId]);
    },
  });
};
```

## GET /api/medical/labrequests/{labrequest_id}/result/
- Get lab result for a lab request
- Response: `LabResultResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchLabResult = async (labRequestId: number) => {
  const response = await axios.get(`/api/medical/labrequests/${labRequestId}/result/`);
  return response.data;
};

// React Query hook
export const useLabResult = (labRequestId: number) => {
  return useQuery(['labResult', labRequestId], () => fetchLabResult(labRequestId), {
    enabled: !!labRequestId,
  });
};
```

## POST /api/medical/labrequests/{labrequest_id}/result/
- Upload or update lab result (lab tech only)
- Request: `LabResultRequest`
- Response: `LabResultResponse`

**React Query Implementation:**
```typescript
// Axios API call
const uploadLabResult = async ({ 
  labRequestId, 
  data 
}: { 
  labRequestId: number; 
  data: LabResultRequest 
}) => {
  const response = await axios.post(`/api/medical/labrequests/${labRequestId}/result/`, data);
  return response.data;
};

// React Query hook
export const useUploadLabResult = () => {
  const queryClient = useQueryClient();
  
  return useMutation(uploadLabResult, {
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['labResult', variables.labRequestId]);
      queryClient.invalidateQueries(['labRequests']);
    },
  });
};
```

## Note on Authorization
For role-restricted endpoints (doctor, lab tech, admin), ensure that the user has the appropriate role by checking their JWT claims. You can implement this using an auth interceptor with Axios:

```typescript
// Auth interceptor
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Error handling interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      // Handle unauthorized access
    }
    return Promise.reject(error);
  }
);
``` 