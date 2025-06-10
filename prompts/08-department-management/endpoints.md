# Department Management Endpoints

## GET /api/departments/
- List all departments
- Response: `DepartmentListResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchDepartments = async () => {
  const response = await axios.get('/api/departments/');
  return response.data;
};

// React Query hook
export const useDepartments = () => {
  return useQuery(['departments'], fetchDepartments);
};
```

## POST /api/departments/
- Create a new department (admin only)
- Request: `DepartmentCreateRequest`
- Response: `DepartmentResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createDepartment = async (data: DepartmentCreateRequest) => {
  const response = await axios.post('/api/departments/', data);
  return response.data;
};

// React Query hook
export const useCreateDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['departments']);
    },
  });
};
```

## GET /api/departments/{department_id}/
- Get department details
- Response: `DepartmentResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchDepartment = async (id: number) => {
  const response = await axios.get(`/api/departments/${id}/`);
  return response.data;
};

// React Query hook
export const useDepartment = (id: number) => {
  return useQuery(['departments', id], () => fetchDepartment(id), {
    enabled: !!id, // Only run the query if we have an ID
  });
};
```

## PUT /api/departments/{department_id}/
- Update department (admin only)
- Request: `DepartmentUpdateRequest`
- Response: `DepartmentResponse`

**React Query Implementation:**
```typescript
// Axios API call
const updateDepartment = async ({ 
  id, 
  data 
}: { 
  id: number; 
  data: DepartmentUpdateRequest 
}) => {
  const response = await axios.put(`/api/departments/${id}/`, data);
  return response.data;
};

// React Query hook
export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateDepartment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['departments']);
      queryClient.setQueryData(['departments', data.id], data);
    },
  });
};
```

## DELETE /api/departments/{department_id}/
- Delete department (admin only)
- Response: `BaseResponseSchema`

**React Query Implementation:**
```typescript
// Axios API call
const deleteDepartment = async (id: number) => {
  const response = await axios.delete(`/api/departments/${id}/`);
  return response.data;
};

// React Query hook
export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(deleteDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['departments']);
    },
  });
};
```

## POST /api/departments/{department_id}/staff/
- Assign staff to department (admin only)
- Request: `DepartmentStaffAssignmentRequest`
- Response: `DepartmentResponse`

**React Query Implementation:**
```typescript
// Axios API call
const assignStaffToDepartment = async ({
  id,
  staffIds
}: {
  id: number;
  staffIds: number[]
}) => {
  const response = await axios.post(`/api/departments/${id}/staff/`, {
    staff_ids: staffIds
  });
  return response.data;
};

// React Query hook
export const useAssignStaffToDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(assignStaffToDepartment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['departments']);
      queryClient.setQueryData(['departments', data.id], data);
    },
  });
};
```

## DELETE /api/departments/{department_id}/staff/
- Remove staff from department (admin only)
- Request: `DepartmentStaffAssignmentRequest`
- Response: `DepartmentResponse`

**React Query Implementation:**
```typescript
// Axios API call
const removeStaffFromDepartment = async ({
  id,
  staffIds
}: {
  id: number;
  staffIds: number[]
}) => {
  const response = await axios.delete(`/api/departments/${id}/staff/`, {
    data: { staff_ids: staffIds }
  });
  return response.data;
};

// React Query hook
export const useRemoveStaffFromDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(removeStaffFromDepartment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['departments']);
      queryClient.setQueryData(['departments', data.id], data);
    },
  });
};
```

## Note on Authorization
For all admin-only endpoints, ensure that the user has the appropriate role by checking their JWT claims. You can implement this using an auth interceptor with Axios:

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