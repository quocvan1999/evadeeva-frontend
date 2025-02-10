export type LoginType = {
  email: string;
  password: string;
};

export type ResponseType<T> = {
  statusCode: number;
  content: T;
  timestamp: Date;
};

export type LoginResponseType = {
  message?: string;
  token?: string;
  error?: string;
};

export type RefreshTokenResponseType = LoginResponseType & {};
