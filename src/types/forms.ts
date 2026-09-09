export interface EmployeeFormData {
  name: string;
  email: string;
  role: string;
  active: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}