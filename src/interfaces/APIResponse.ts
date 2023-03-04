export type DataResSuccess<T> = {
  message: string;
  access_token: string;
  result: T;
};

export type APIResSuccess<T> = {
  data: DataResSuccess<T>;
  status: number;
};

export type APIResError = {
  response: {
    data: {
      message: string;
    };
    status: number;
  };
};

export type TypeReturn<T> = Promise<APIResSuccess<T>>;
