export interface LoginInterface{
  email: string;
  password: string;
}

export interface LoginRequest{
  message: string;
  token: string;
  status: boolean;
  userData: string;
}

export interface LoginRes{
  request: string;
  result: LoginRequest;
  status: boolean;
}