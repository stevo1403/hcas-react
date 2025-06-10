# Appointment Endpoints

## GET /appointments
- List appointments (paginated)
- Response: `{ appointments: Appointment[], page, size, total }`

**React Query Implementation:**
```typescript
// Axios API call
const fetchAppointments = async (params): Promise<AppointmentListResponse> => {
  const response = await axios.get('/appointments', { params });
  return response.data;
};

// React Query hook
export const useAppointments = (page = 1, size = 10, filters = {}) => {
  return useQuery(
    ['appointments', page, size, filters],
    () => fetchAppointments({ page, size, ...filters }),
    {
      keepPreviousData: true,
      staleTime: 30 * 1000,
    }
  );
};
```

## POST /appointments
- Book a new appointment
- Request: `{ patient_id, datetime, reason }`
- Response: `{ appointment: Appointment }`

**React Query Implementation:**
```typescript
// Axios API call
const createAppointment = async (data): Promise<Appointment> => {
  const response = await axios.post('/appointments', data);
  return response.data.appointment;
};

// React Query hook
export const useCreateAppointment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['appointments']);
    },
  });
};
```

## PUT /appointments/{id}
- Update appointment (reschedule/cancel)
- Request: `{ datetime?, status? }`
- Response: `{ appointment: Appointment }`

**React Query Implementation:**
```typescript
// Axios API call
const updateAppointment = async ({ id, data }): Promise<Appointment> => {
  const response = await axios.put(`/appointments/${id}`, data);
  return response.data.appointment;
};

// React Query hook
export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(updateAppointment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['appointments']);
    },
  });
};
```

## POST /appointments/{id}/approve
- Approve appointment (staff only)
- Response: `{ appointment: Appointment }`

**React Query Implementation:**
```typescript
// Axios API call
const approveAppointment = async (id): Promise<Appointment> => {
  const response = await axios.post(`/appointments/${id}/approve`);
  return response.data.appointment;
};

// React Query hook
export const useApproveAppointment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(approveAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['appointments']);
    },
  });
};
```

## POST /appointments/{id}/reject
- Reject appointment (staff only)
- Response: `{ appointment: Appointment }`

**React Query Implementation:**
```typescript
// Axios API call
const rejectAppointment = async (id): Promise<Appointment> => {
  const response = await axios.post(`/appointments/${id}/reject`);
  return response.data.appointment;
};

// React Query hook
export const useRejectAppointment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(rejectAppointment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['appointments']);
    },
  });
};
``` 