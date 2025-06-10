# Admin Dashboard Endpoints

## GET /admin/analytics
- Get system analytics and usage stats
- Response: `{ stats: Analytics }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchAnalytics = async () => {
  const response = await axios.get('/admin/analytics');
  return response.data.stats;
};

// React Query hook
export const useAnalytics = () => {
  return useQuery(['adminAnalytics'], fetchAnalytics);
};
```

## GET /admin/users
- List all users
- Response: `{ users: User[], page, size, total }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchUsers = async (params) => {
  const response = await axios.get('/admin/users', { params });
  return response.data;
};

// React Query hook
export const useUsers = (page = 1, size = 10, filters = {}) => {
  return useQuery(['adminUsers', page, size, filters], () => fetchUsers({ page, size, ...filters }));
};
```

## POST /admin/users
- Create a new user
- Request: `{ ...user fields... }`
- Response: `{ user: User }`

**React Query Implementation:**
```typescript
// Axios API call
const createUser = async (data) => {
  const response = await axios.post('/admin/users', data);
  return response.data.user;
};

// React Query hook
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
    },
  });
};
```

## PUT /admin/users/{id}
- Update user
- Request: `{ ...user fields... }`
- Response: `{ user: User }`

**React Query Implementation:**
```typescript
// Axios API call
const updateUser = async ({ id, data }) => {
  const response = await axios.put(`/admin/users/${id}`, data);
  return response.data.user;
};

// React Query hook
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
    },
  });
};
```

## PUT /admin/users/{id}/deactivate
- Deactivate user
- Response: `{ user: User }`

**React Query Implementation:**
```typescript
// Axios API call
const deactivateUser = async (id) => {
  const response = await axios.put(`/admin/users/${id}/deactivate`);
  return response.data.user;
};

// React Query hook
export const useDeactivateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation(deactivateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminUsers']);
    },
  });
};
```

## GET /admin/departments
- List all departments
- Response: `{ departments: Department[] }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchDepartments = async () => {
  const response = await axios.get('/admin/departments');
  return response.data.departments;
};

// React Query hook
export const useDepartments = () => {
  return useQuery(['adminDepartments'], fetchDepartments);
};
```

## POST /admin/departments
- Create department
- Request: `{ name, ... }`
- Response: `{ department: Department }`

**React Query Implementation:**
```typescript
// Axios API call
const createDepartment = async (data) => {
  const response = await axios.post('/admin/departments', data);
  return response.data.department;
};

// React Query hook
export const useCreateDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminDepartments']);
    },
  });
};
```

## PUT /admin/departments/{id}
- Update department
- Request: `{ name, ... }`
- Response: `{ department: Department }`

**React Query Implementation:**
```typescript
// Axios API call
const updateDepartment = async ({ id, data }) => {
  const response = await axios.put(`/admin/departments/${id}`, data);
  return response.data.department;
};

// React Query hook
export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateDepartment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminDepartments']);
    },
  });
};
```

## GET /admin/audit-logs
- List audit logs
- Response: `{ logs: AuditLog[], page, size, total }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchAuditLogs = async (params) => {
  const response = await axios.get('/admin/audit-logs', { params });
  return response.data;
};

// React Query hook
export const useAuditLogs = (page = 1, size = 20, filters = {}) => {
  return useQuery(['adminAuditLogs', page, size, filters], () => fetchAuditLogs({ page, size, ...filters }));
};
```

## GET /admin/settings
- Get system settings
- Response: `{ settings: Setting[] }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchSettings = async () => {
  const response = await axios.get('/admin/settings');
  return response.data.settings;
};

// React Query hook
export const useSettings = () => {
  return useQuery(['adminSettings'], fetchSettings);
};
```

## PUT /admin/settings
- Update system settings
- Request: `{ settings: Setting[] }`
- Response: `{ settings: Setting[] }`

**React Query Implementation:**
```typescript
// Axios API call
const updateSettings = async (data) => {
  const response = await axios.put('/admin/settings', { settings: data });
  return response.data.settings;
};

// React Query hook
export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateSettings, {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminSettings']);
    },
  });
};
``` 