export type SetSuccessHandlerType = React.Dispatch<
  React.SetStateAction<SuccessHandlerType>
>;

export type SetErrorHandlerType = React.Dispatch<
  React.SetStateAction<ErrorHandlerType>
>;

export interface SuccessHandlerType {
  isSuccess: boolean;
  message: string;
}

export interface ErrorHandlerType {
  hasError: boolean;
  message: string;
}

export interface IToastHandlerType {
  errorHandlerObj: ErrorHandlerType;
  successHandlerObj: SuccessHandlerType;
  setErrorHandlerObj: SetErrorHandlerType;
  setSuccessHandlerObj: SetSuccessHandlerType;
}
