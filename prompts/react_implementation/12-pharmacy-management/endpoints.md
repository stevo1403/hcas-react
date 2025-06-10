# Pharmacy/Medication Management Endpoints

## GET /api/pharmacy/drugs/
- List all drugs in inventory
- Response: `[DrugInventoryResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchDrugs = async (params) => {
  const response = await axios.get('/api/pharmacy/drugs/', { params });
  return response.data;
};

// React Query hook
export const useDrugs = (filters = {}) => {
  return useQuery(['drugs', filters], () => fetchDrugs(filters));
};
```

## POST /api/pharmacy/drugs/
- Add new drug to inventory
- Request: `DrugInventoryRequest`
- Response: `DrugInventoryResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createDrug = async (data: DrugInventoryRequest) => {
  const response = await axios.post('/api/pharmacy/drugs/', data);
  return response.data;
};

// React Query hook
export const useCreateDrug = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createDrug, {
    onSuccess: () => {
      queryClient.invalidateQueries(['drugs']);
    },
  });
};
```

## GET /api/pharmacy/drugs/{drug_id}/stockadjustments/
- List all stock adjustments for a drug
- Response: `[StockAdjustmentResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchStockAdjustments = async (drugId: number) => {
  const response = await axios.get(`/api/pharmacy/drugs/${drugId}/stockadjustments/`);
  return response.data;
};

// React Query hook
export const useStockAdjustments = (drugId: number) => {
  return useQuery(['stockAdjustments', drugId], () => fetchStockAdjustments(drugId), {
    enabled: !!drugId,
  });
};
```

## POST /api/pharmacy/drugs/{drug_id}/stockadjustments/
- Create a stock adjustment for a drug
- Request: `StockAdjustmentRequest`
- Response: `StockAdjustmentResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createStockAdjustment = async ({ 
  drugId, 
  data 
}: { 
  drugId: number; 
  data: StockAdjustmentRequest 
}) => {
  const response = await axios.post(`/api/pharmacy/drugs/${drugId}/stockadjustments/`, data);
  return response.data;
};

// React Query hook
export const useCreateStockAdjustment = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createStockAdjustment, {
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['stockAdjustments', variables.drugId]);
      queryClient.invalidateQueries(['drugs']);
    },
  });
};
```

## GET /api/pharmacy/dispense/
- List all dispense records
- Response: `[DispenseRecordResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchDispenseRecords = async (params) => {
  const response = await axios.get('/api/pharmacy/dispense/', { params });
  return response.data;
};

// React Query hook
export const useDispenseRecords = (filters = {}) => {
  return useQuery(['dispenseRecords', filters], () => fetchDispenseRecords(filters));
};
```

## POST /api/pharmacy/prescriptions/{prescription_id}/dispense/
- Dispense medication for a prescription
- Request: `DispenseRecordRequest`
- Response: `DispenseRecordResponse`

**React Query Implementation:**
```typescript
// Axios API call
const dispenseForPrescription = async ({ 
  prescriptionId, 
  data 
}: { 
  prescriptionId: number; 
  data: DispenseRecordRequest 
}) => {
  const response = await axios.post(`/api/pharmacy/prescriptions/${prescriptionId}/dispense/`, data);
  return response.data;
};

// React Query hook
export const useDispenseForPrescription = () => {
  const queryClient = useQueryClient();
  
  return useMutation(dispenseForPrescription, {
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['dispenseRecords']);
      queryClient.invalidateQueries(['prescriptions']);
      queryClient.invalidateQueries(['drugs']);
    },
  });
};
```

## GET /api/medical/visits/{visit_id}/prescriptions/
- List prescriptions for a visit
- Response: `[PrescriptionResponse]`

**React Query Implementation:**
```typescript
// Axios API call
const fetchPrescriptions = async (visitId: number) => {
  const response = await axios.get(`/api/medical/visits/${visitId}/prescriptions/`);
  return response.data;
};

// React Query hook
export const usePrescriptions = (visitId: number) => {
  return useQuery(['prescriptions', visitId], () => fetchPrescriptions(visitId), {
    enabled: !!visitId,
  });
};
```

## POST /api/medical/visits/{visit_id}/prescriptions/
- Create a prescription for a visit
- Request: `PrescriptionRequest`
- Response: `PrescriptionResponse`

**React Query Implementation:**
```typescript
// Axios API call
const createPrescription = async ({ 
  visitId, 
  data 
}: { 
  visitId: number; 
  data: PrescriptionRequest 
}) => {
  const response = await axios.post(`/api/medical/visits/${visitId}/prescriptions/`, data);
  return response.data;
};

// React Query hook
export const useCreatePrescription = () => {
  const queryClient = useQueryClient();
  
  return useMutation(createPrescription, {
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['prescriptions', variables.visitId]);
    },
  });
};
```
