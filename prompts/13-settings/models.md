# Settings & System Configuration Models

## TypeScript Interfaces

```typescript
// Base Response interface
interface BaseResponse {
  ok: boolean;
  error?: string | null;
  message?: string | null;
}

// User Profile Response (from user management)
interface UserProfileResponse extends BaseResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
  // Add any other fields from user management models
}

// User Profile Update Request (from user management)
interface UserProfileUpdateRequest {
  email: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  phone_no?: string | null;
  profile_picture?: string | null;
  bio?: string | null;
  matric_no?: string | null;
  is_active: boolean;
  disabled: boolean;
  // Add any other updatable fields from user management models
}

// System Settings
interface Settings extends BaseResponse {
  [key: string]: any; // Dynamic settings object
}

// Settings Update Request
interface SettingsUpdateRequest {
  key: string;
  value: string;
}

// Change Password Request
interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

// User Preferences (stored locally)
interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  dashboardLayout?: string;
  fontSize?: 'small' | 'medium' | 'large';
}

// Settings Module State (Redux)
interface SettingsState {
  userProfile: UserProfileResponse | null;
  systemSettings: Settings | null;
  userPreferences: UserPreferences;
  isLoading: boolean;
  error: string | null;
}
```

## Yup Validation Schemas

```typescript
// User Profile Update Validation
// (reuse from user management, extending as needed)

// Settings Update Validation
const settingsUpdateSchema = Yup.object({
  key: Yup.string().required('Setting key is required'),
  value: Yup.string().required('Setting value is required')
});

// Change Password Validation
const changePasswordSchema = Yup.object({
  old_password: Yup.string().required('Current password is required'),
  new_password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('New password is required')
});

// User Preferences Validation
const userPreferencesSchema = Yup.object({
  theme: Yup.string().oneOf(['light', 'dark']).required(),
  language: Yup.string().required(),
  notifications: Yup.object({
    email: Yup.boolean().required(),
    push: Yup.boolean().required(),
    sms: Yup.boolean().required()
  }).required(),
  dashboardLayout: Yup.string().optional(),
  fontSize: Yup.string().oneOf(['small', 'medium', 'large']).optional()
});
``` 