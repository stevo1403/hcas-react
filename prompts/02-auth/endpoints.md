# Authentication Endpoints

## POST /auth/register
- Registers a new user (patient, staff, or admin)
- Request: `{ email, password, role, ... }` (see RegisterRequest interface)
- Response: `{ user, token }`

**React Query Implementation:**
```typescript
// Axios API call
const registerUser = async (userData: RegisterRequest): Promise<{ user: User; token: string }> => {
  const response = await axios.post('/auth/register', userData);
  return response.data;
};

// React Query hook
export const useRegisterUser = () => {
  return useMutation(registerUser, {
    onSuccess: (data) => {
      // Store token in localStorage/AsyncStorage
      // Update auth state in Redux
    },
  });
};
```

## POST /auth/login
- Authenticates user and returns JWT
- Request: `{ email, password }` (see LoginRequest interface)
- Response: `{ user, token }`

**React Query Implementation:**
```typescript
// Axios API call
const loginUser = async (credentials: LoginRequest): Promise<{ user: User; token: string }> => {
  const response = await axios.post('/auth/login', credentials);
  return response.data;
};

// React Query hook
export const useLoginUser = () => {
  return useMutation(loginUser, {
    onSuccess: (data) => {
      // Store token in localStorage/AsyncStorage
      // Update auth state in Redux
    },
  });
};
```

## POST /auth/password-reset
- Sends password reset email
- Request: `{ email }` (see PasswordResetRequest interface)
- Response: `{ message }`

**React Query Implementation:**
```typescript
// Axios API call
const resetPassword = async (data: PasswordResetRequest): Promise<{ message: string }> => {
  const response = await axios.post('/auth/password-reset', data);
  return response.data;
};

// React Query hook
export const useResetPassword = () => {
  return useMutation(resetPassword);
};
``` 