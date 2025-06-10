# Staff Management Endpoints

## GET /api/auth/staff/
- List all staff
- Response: `[StaffProfileResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchStaff = async (params) => {
  const response = await axios.get('/api/auth/staff/', { params });
  return response.data;
};

// React Query hook
export const useStaff = (filters = {}) => {
  return useQuery(['staff', filters], () => fetchStaff(filters));
};
```

## POST /api/auth/staff/
- Register/onboard new staff (admin only)
- Request: `StaffProfileCreateRequest`
- Response: `StaffProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createStaff = async (data: StaffProfileCreateRequest) => {
  const response = await axios.post('/api/auth/staff/', data);
  return response.data;
};

// React Query hook
export const useCreateStaff = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createStaff, {
    onSuccess: () => {
      queryClient.invalidateQueries(['staff']);
    },
  });
};
```

## GET /api/auth/staff/{user_id}/
- Get staff profile by user ID
- Response: `StaffProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchStaffById = async (userId: number) => {
  const response = await axios.get(`/api/auth/staff/${userId}/`);
  return response.data;
};

// React Query hook
export const useStaffMember = (userId: number) => {
  return useQuery(['staff', userId], () => fetchStaffById(userId), {
    enabled: !!userId,
  });
};
```

## GET /api/auth/staff/email/{email}/
- Get staff profile by email
- Response: `StaffProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchStaffByEmail = async (email: string) => {
  const response = await axios.get(`/api/auth/staff/email/${encodeURIComponent(email)}/`);
  return response.data;
};

// React Query hook
export const useStaffByEmail = (email: string) => {
  return useQuery(['staff', 'email', email], () => fetchStaffByEmail(email), {
    enabled: !!email,
  });
};
```

## PUT /api/auth/staff/{user_id}/
- Update staff profile (admin only)
- Request: `StaffProfileUpdateRequest`
- Response: `StaffProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const updateStaff = async ({ 
  userId, 
  data 
}: { 
  userId: number; 
  data: StaffProfileUpdateRequest 
}) => {
  const response = await axios.put(`/api/auth/staff/${userId}/`, data);
  return response.data;
};

// React Query hook
export const useUpdateStaff = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateStaff, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['staff']);
      queryClient.setQueryData(['staff', data.id], data);
    },
  });
};
```

## GET /api/roles/
- List all roles
- Response: `[RoleSchema]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchRoles = async () => {
  const response = await axios.get('/api/roles/');
  return response.data;
};

// React Query hook
export const useRoles = () => {
  return useQuery(['roles'], fetchRoles, {
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

## GET /api/permissions/
- List all permissions
- Response: `[PermissionSchema]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchPermissions = async () => {
  const response = await axios.get('/api/permissions/');
  return response.data;
};

// React Query hook
export const usePermissions = () => {
  return useQuery(['permissions'], fetchPermissions, {
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```
