type RequestForm = {
  method: 'GET' | 'POST' | 'DELETE';
  path: string;
  data?: Record<string, unknown> | FormData;
  params?: Record<string, unknown> | FormData;
};

type ErrorType = {
  status: number;
  statusText: string;
  data: { message: string };
};

type Token = { accessToken: string; refreshToken: string };
