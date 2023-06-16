export interface ILoginErrorResponse {
  success: boolean;
  message: string;
}

export interface ILoginCredentials {
  email: string,
  password: string,
}

export interface ILoginResponse extends ILoginErrorResponse {
  token: string;
  data: UserResponse;
}

export interface UserResponse {
  _id: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}