export interface LoginInterface{
  email: string;
  password: string;
}

export interface LoginRequest{
  message: string;
  error: string;
  status: boolean;
  request: string;
  countRecords?: number;
}