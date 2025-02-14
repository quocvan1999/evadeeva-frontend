export type LoginType = {
  email: string;
  password: string;
};

export type ResponseType<T> = {
  statusCode: number;
  content: T;
  timestamp: Date;
};

export type CheckAccountType = LoginType & {};

export type CheckCodeType = {
  email: string;
  otp: string;
};

// ------------------------------------------
export type ContentResponseType = {
  message?: string;
  error?: string;
};

export type LoginResponseType = ContentResponseType & {
  token?: string;
};

export type RefreshTokenResponseType = ContentResponseType & {
  token?: string;
};

export type GetCodeResponseType = ContentResponseType & {
  code?: string;
};

export type CheckAccountResponseType = ContentResponseType & {};

export type CheckCodeResponseType = ContentResponseType & {};
