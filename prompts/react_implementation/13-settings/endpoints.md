# Settings & System Configuration Endpoints

## GET /api/users/me/
- Get current user profile/settings
- Response: `UserProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const fetchUserProfile = async () => {
  const response = await axios.get('/api/users/me/');
  return response.data;
};

// React Query hook
export const useUserProfile = () => {
  return useQuery(['userProfile'], fetchUserProfile, {
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

## PUT /api/users/me/
- Update current user profile/settings
- Request: `UserProfileUpdateRequest`
- Response: `UserProfileResponse`

**React Query Implementation:**
```typescript
// Axios API call
const updateUserProfile = async (data: UserProfileUpdateRequest) => {
  const response = await axios.put('/api/users/me/', data);
  return response.data;
};

// React Query hook
export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateUserProfile, {
    onSuccess: (data) => {
      queryClient.setQueryData(['userProfile'], data);
    },
  });
};
```

## POST /api/users/me/password/
- Change user password
- Request: `{ old_password, new_password }`
- Response: `BaseResponse`

**React Query Implementation:**
```typescript
// Axios API call
const changePassword = async (data: ChangePasswordRequest) => {
  const response = await axios.post('/api/users/me/password/', data);
  return response.data;
};

// React Query hook
export const useChangePassword = () => {
  return useMutation(changePassword);
};
```

## GET /api/admin/settings/
- Get system-wide settings (admin only)
- Response: `Settings`

**React Query Implementation:**
```typescript
// Axios API call
const fetchSystemSettings = async () => {
  const response = await axios.get('/api/admin/settings/');
  return response.data;
};

// React Query hook
export const useSystemSettings = () => {
  return useQuery(['systemSettings'], fetchSystemSettings, {
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

## PUT /api/admin/settings/
- Update system-wide settings (admin only)
- Request: `SettingsUpdateRequest`
- Response: `Settings`

**React Query Implementation:**
```typescript
// Axios API call
const updateSystemSetting = async (data: SettingsUpdateRequest) => {
  const response = await axios.put('/api/admin/settings/', data);
  return response.data;
};

// React Query hook
export const useUpdateSystemSetting = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateSystemSetting, {
    onSuccess: () => {
      queryClient.invalidateQueries(['systemSettings']);
    },
  });
};
```

## Local Storage Implementation for User Preferences

```typescript
// Save preferences to localStorage
export const saveUserPreferences = (preferences: UserPreferences) => {
  localStorage.setItem('userPreferences', JSON.stringify(preferences));
};

// Load preferences from localStorage
export const loadUserPreferences = (): UserPreferences => {
  const defaultPreferences: UserPreferences = {
    theme: 'light',
    language: 'en',
    notifications: {
      email: true,
      push: true,
      sms: false
    }
  };
  
  try {
    const savedPreferences = localStorage.getItem('userPreferences');
    return savedPreferences ? JSON.parse(savedPreferences) : defaultPreferences;
  } catch (error) {
    console.error('Error loading user preferences:', error);
    return defaultPreferences;
  }
};

// Hook for managing user preferences
export const useUserPreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences>(loadUserPreferences());
  
  const updatePreferences = useCallback((newPreferences: Partial<UserPreferences>) => {
    setPreferences(prev => {
      const updated = { ...prev, ...newPreferences };
      saveUserPreferences(updated);
      return updated;
    });
  }, []);
  
  return { preferences, updatePreferences };
};
```
