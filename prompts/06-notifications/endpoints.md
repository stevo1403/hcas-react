# Notification Endpoints

## GET /notifications
- List notifications for user (paginated)
- Response: `{ notifications: Notification[], page, size, total, unread_count }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchNotifications = async (params) => {
  const response = await axios.get('/notifications', { params });
  return response.data;
};

// React Query hook
export const useNotifications = (page = 1, size = 20) => {
  return useQuery(
    ['notifications', page, size],
    () => fetchNotifications({ page, size }),
    {
      keepPreviousData: true,
      staleTime: 30 * 1000, // 30 seconds
      refetchInterval: 60 * 1000, // 1 minute
    }
  );
};
```

## POST /notifications/mark-read
- Mark notification(s) as read
- Request: `{ notification_ids: string[] }`
- Response: `{ success: boolean }`

**React Query Implementation:**
```typescript
// Axios API call
const markNotificationsRead = async (data) => {
  const response = await axios.post('/notifications/mark-read', data);
  return response.data;
};

// React Query hook
export const useMarkNotificationsRead = () => {
  const queryClient = useQueryClient();
  
  return useMutation(markNotificationsRead, {
    onSuccess: () => {
      queryClient.invalidateQueries(['notifications']);
    },
  });
};
```

## GET /notifications/preferences
- Get user notification preferences
- Response: `{ preferences: NotificationPreferences }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchNotificationPreferences = async () => {
  const response = await axios.get('/notifications/preferences');
  return response.data.preferences;
};

// React Query hook
export const useNotificationPreferences = () => {
  return useQuery(
    ['notificationPreferences'],
    fetchNotificationPreferences,
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );
};
```

## PUT /notifications/preferences
- Update user notification preferences
- Request: `{ preferences: UpdateNotificationPreferencesRequest }`
- Response: `{ preferences: NotificationPreferences }`

**React Query Implementation:**
```typescript
// Axios API call
const updateNotificationPreferences = async (data) => {
  const response = await axios.put('/notifications/preferences', { preferences: data });
  return response.data.preferences;
};

// React Query hook
export const useUpdateNotificationPreferences = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateNotificationPreferences, {
    onSuccess: (data) => {
      queryClient.setQueryData(['notificationPreferences'], data);
    },
  });
};
```

## POST /notifications/send
- Send notification (admin only)
- Request: `{ message, target_roles?, target_user_ids?, ... }`
- Response: `{ success: boolean }`

**React Query Implementation:**
```typescript
// Axios API call
const sendNotification = async (data) => {
  const response = await axios.post('/notifications/send', data);
  return response.data;
};

// React Query hook
export const useSendNotification = () => {
  return useMutation(sendNotification);
};
```

## WebSocket Integration (Optional)
```typescript
// Setup WebSocket connection
export const setupNotificationSocket = (token: string) => {
  const socket = io(API_URL, {
    auth: {
      token,
    },
  });
  
  socket.on('connect', () => {
    console.log('Connected to notification service');
  });
  
  socket.on('notification', (notification: Notification) => {
    // Update Redux store or use React Query cache update
    // Show toast/snackbar for new notification
  });
  
  return socket;
};
``` 