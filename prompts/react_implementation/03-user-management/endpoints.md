# User Management Endpoints

## GET /users/me
- Get current user profile
- Response: `{ user: User }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchCurrentUser = async (): Promise<User> => {
  const response = await axios.get('/users/me');
  return response.data.user;
};

// React Query hook
export const useCurrentUser = () => {
  return useQuery(['currentUser'], fetchCurrentUser, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};
```

## PUT /users/me
- Update current user profile
- Request: `{ ...profile fields... }` (see UpdateUserRequest interface)
- Response: `{ user: User }`

**React Query Implementation:**
```typescript
// Axios API call
const updateCurrentUser = async (userData: UpdateUserRequest): Promise<User> => {
  const response = await axios.put('/users/me', userData);
  return response.data.user;
};

// React Query hook
export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateCurrentUser, {
    onSuccess: (data) => {
      // Update user in cache
      queryClient.setQueryData(['currentUser'], data);
      // Invalidate any queries that might depend on user data
      queryClient.invalidateQueries(['userDependentData']);
    },
  });
};
```

## GET /departments
- List all departments
- Response: `{ departments: Department[] }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchDepartments = async (): Promise<Department[]> => {
  const response = await axios.get('/departments');
  return response.data.departments;
};

// React Query hook
export const useDepartments = () => {
  return useQuery(['departments'], fetchDepartments, {
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

## POST /departments
- Create a new department
- Request: `{ name, ... }` (see CreateDepartmentRequest interface)
- Response: `{ department: Department }`

**React Query Implementation:**
```typescript
// Axios API call
const createDepartment = async (departmentData: CreateDepartmentRequest): Promise<Department> => {
  const response = await axios.post('/departments', departmentData);
  return response.data.department;
};

// React Query hook
export const useCreateDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createDepartment, {
    onSuccess: () => {
      // Invalidate departments query to refetch the list
      queryClient.invalidateQueries(['departments']);
    },
  });
};
```

## PUT /departments/{id}
- Update department
- Request: `{ name, ... }` (see UpdateDepartmentRequest interface)
- Response: `{ department: Department }`

**React Query Implementation:**
```typescript
// Axios API call
const updateDepartment = async ({ id, data }: { id: string; data: UpdateDepartmentRequest }): Promise<Department> => {
  const response = await axios.put(`/departments/${id}`, data);
  return response.data.department;
};

// React Query hook
export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateDepartment, {
    onSuccess: (data) => {
      // Update department in cache
      queryClient.setQueryData(['departments', data.id], data);
      // Invalidate departments list query
      queryClient.invalidateQueries(['departments']);
    },
  });
}; 