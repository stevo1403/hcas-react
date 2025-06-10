// User Types
export interface User {
  id: string;
  email: string;
  role: 'patient' | 'staff' | 'admin';
  name: string;
  first_name?: string;
  last_name?: string;
  department?: Department;
  [key: string]: any;
}

// Auth Types
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
  next_of_kin: string;
  matric_no: string;
  phone_no?: string;
  country?: string;
  role: 'patient';
}

// Department Types
export interface Department {
  id: string;
  name: string;
  staff?: User[];
}

// Appointment Types
export type AppointmentStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

export interface Appointment {
  id: string;
  patient_id: string;
  staff_id: string;
  datetime: string;
  reason: string;
  status: AppointmentStatus;
  patient?: User;
  staff?: User;
  created_at?: string;
  updated_at?: string;
}

export interface CreateAppointmentRequest {
  patient_id: string;
  staff_id?: string;
  datetime: string;
  reason: string;
}

// Medical Record Types
export interface MedicalRecord {
  id: string;
  patient_id: string;
  doctor_id: string;
  symptoms: string;
  diagnosis: string;
  treatment: string;
  finalized: boolean;
  lab_results?: LabResult[];
  created_at?: string;
  updated_at?: string;
  patient?: User;
  doctor?: User;
}

export interface LabResult {
  id: string;
  record_id: string;
  file_url: string;
  file_type?: string;
  uploaded_at: string;
  name?: string;
  size?: number;
}

// Notification Types
export interface Notification {
  id: string;
  user_id: string;
  message: string;
  read: boolean;
  created_at: string;
  type?: string;
  link?: string;
  data?: any;
}

// UI State Types
export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  loading: boolean;
  error: string | null;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  size: number;
  total: number;
}
