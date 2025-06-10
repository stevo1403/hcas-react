# Pharmacy/Medication Management Models

## TypeScript Interfaces

```typescript
// Base Response interface
interface BaseResponse {
  ok: boolean;
  error?: string | null;
  message?: string | null;
}

// Drug Inventory Request
interface DrugInventoryRequest {
  name: string;
  description: string | null;
  quantity_in_stock: number;
  unit: string;
  batch_number: string | null;
  expiry_date: string;
  supplier_id: number | null;
  purchase_price: number | null;
}

// Drug Inventory Response
interface DrugInventoryResponse extends BaseResponse {
  id: number;
  name: string;
  description: string | null;
  quantity_in_stock: number;
  unit: string;
  batch_number: string | null;
  expiry_date: string;
  supplier: number | null;
  purchase_price: number | null;
  created_at: string;
  updated_at: string;
}

// Stock Adjustment Request
interface StockAdjustmentRequest {
  drug_id: number;
  adjustment_type: string; // 'STOCK_IN' | 'STOCK_OUT' | 'WASTAGE' | 'RETURN'
  quantity: number;
  reason: string | null;
}

// Stock Adjustment Response
interface StockAdjustmentResponse extends BaseResponse {
  id: number;
  drug: DrugInventoryResponse;
  adjustment_type: string;
  quantity: number;
  reason: string | null;
  created_at: string;
  updated_at: string;
}

// Prescription Request
interface PrescriptionRequest {
  medication_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string | null;
}

// Prescription Response
interface PrescriptionResponse extends BaseResponse {
  id: number;
  medication_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string | null;
  prescribed_by: number | null;
  created_at: string;
  updated_at: string;
}

// Dispense Record Request
interface DispenseRecordRequest {
  prescription_id: number | null;
  patient_id: number;
  drug_id: number;
  quantity_dispensed: number;
  notes: string | null;
  batch_number: string | null;
  expiry_date: string;
  return_quantity: number | null;
  wastage_quantity: number | null;
}

// Dispense Record Response
interface DispenseRecordResponse extends BaseResponse {
  id: number;
  prescription: number | null;
  patient: number;
  dispensed_by: number | null;
  drug: DrugInventoryResponse;
  quantity_dispensed: number;
  dispense_date: string;
  notes: string | null;
  batch_number: string | null;
  expiry_date: string;
  return_quantity: number;
  wastage_quantity: number;
  created_at: string;
  updated_at: string;
}
```

## Yup Validation Schemas

```typescript
// Drug Inventory Validation
const drugInventorySchema = Yup.object({
  name: Yup.string().required('Drug name is required'),
  description: Yup.string().nullable(),
  quantity_in_stock: Yup.number().integer().required('Quantity is required'),
  unit: Yup.string().required('Unit is required'),
  batch_number: Yup.string().nullable(),
  expiry_date: Yup.date().required('Expiry date is required'),
  supplier_id: Yup.number().nullable(),
  purchase_price: Yup.number().nullable()
});

// Stock Adjustment Validation
const stockAdjustmentSchema = Yup.object({
  drug_id: Yup.number().required('Drug ID is required'),
  adjustment_type: Yup.string()
    .oneOf(['STOCK_IN', 'STOCK_OUT', 'WASTAGE', 'RETURN'])
    .required('Adjustment type is required'),
  quantity: Yup.number().integer().positive().required('Quantity is required'),
  reason: Yup.string().nullable()
});

// Prescription Validation
const prescriptionSchema = Yup.object({
  medication_name: Yup.string().required('Medication name is required'),
  dosage: Yup.string().required('Dosage is required'),
  frequency: Yup.string().required('Frequency is required'),
  duration: Yup.string().required('Duration is required'),
  instructions: Yup.string().nullable()
});

// Dispense Record Validation
const dispenseRecordSchema = Yup.object({
  prescription_id: Yup.number().nullable(),
  patient_id: Yup.number().required('Patient ID is required'),
  drug_id: Yup.number().required('Drug ID is required'),
  quantity_dispensed: Yup.number().integer().positive().required('Quantity is required'),
  notes: Yup.string().nullable(),
  batch_number: Yup.string().nullable(),
  expiry_date: Yup.date().required('Expiry date is required'),
  return_quantity: Yup.number().integer().min(0).nullable(),
  wastage_quantity: Yup.number().integer().min(0).nullable()
});
```
