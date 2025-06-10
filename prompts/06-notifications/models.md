# Notification Models

## TypeScript Interfaces

```typescript
// Notification Model
interface Notification {
  id: string;
  user_id: string;
  message: string;
  read: boolean;
  created_at: string; // ISO date string
  type?: string; // Optional notification type
  link?: string; // Optional deep link
  data?: any; // Optional additional data
}

// Notification List Response
interface NotificationListResponse {
  notifications: Notification[];
  page: number;
  size: number;
  total: number;
  unread_count: number;
}

// Mark Read Request
interface MarkReadRequest {
  notification_ids: string[];
}

// Notification Preferences Model
interface NotificationPreferences {
  user_id: string;
  email: boolean;
  push: boolean;
  sms: boolean;
  in_app: boolean;
}

// Update Notification Preferences Request
interface UpdateNotificationPreferencesRequest {
  email?: boolean;
  push?: boolean;
  sms?: boolean;
  in_app?: boolean;
}

// Send Notification Request (Admin)
interface SendNotificationRequest {
  message: string;
  target_roles?: ('patient' | 'staff' | 'admin')[];
  target_user_ids?: string[];
  data?: any;
  type?: string;
  link?: string;
}

// Notification State (Redux)
interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  preferences: NotificationPreferences | null;
  pagination: {
    page: number;
    size: number;
    total: number;
  };
  isLoading: boolean;
  error: string | null;
}
```

## Notes
- All interfaces should be imported/used in components and API calls
- Use date-fns or similar for date formatting/manipulation
- Consider implementing real-time notifications via WebSockets or polling
- Ensure notification types are consistent with backend expectations
- Use appropriate Redux actions for updating notification state 