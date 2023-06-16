export interface IResponse {
  success: boolean;
  message: string;
  added?: any;
  updated?: any;
  deleted?: any;
}

export interface ErrorResponse extends IResponse {
  errors: { [key: string]: Array<string> }
}