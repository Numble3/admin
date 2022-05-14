import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://3.36.157.185:80';

const errorHandling = (err: unknown) => {
  let errRes: ErrorType = { data: { message: '' }, status: -1, statusText: '' };

  if (axios.isAxiosError(err)) {
    errRes = {
      data: { message: (err.response?.data as { message: string }).message ?? '' },
      status: err.response?.status ?? -1,
      statusText: err.response?.statusText ?? '',
    };
  }
  console.error(err);

  return errRes;
};

export const sendRequest = async <T>(
  request: RequestForm
): Promise<{
  data: T | null;
  error: ErrorType | null;
}> => {
  const axiosConfig: AxiosRequestConfig = {
    method: request.method,
    url: request.path,
    withCredentials: true,
  };

  if (request.data) axiosConfig.data = request.data;
  if (request.params) axiosConfig.params = request.params;

  getAuth(axiosConfig);

  try {
    console.log('axiosConfig', axiosConfig);

    const res = await axios(axiosConfig);
    // console.log('res', res);

    if (res.data && res.status === 200) {
      return { data: res.data, error: null };
    }
    if (res.status === 401) {
      getRefreshToken();
    }
    throw res;
  } catch (err) {
    // console.error(err);
    const errRes = errorHandling(err);

    return { data: null, error: errRes };
  }
};

const getAuth = (axiosConfig: AxiosRequestConfig) => {
  const token = JSON.parse(localStorage.getItem('admin') || 'null');
  axiosConfig.headers = token ? { Authorization: `${token.accessToken}` } : {};
};

const getRefreshToken = async () => {
  const axiosConfig: AxiosRequestConfig = {
    method: 'GET',
    url: '/api/refresh-token',
    withCredentials: true,
  };
  const { refreshToken } = JSON.parse(localStorage.getItem('admin') || 'null');
  axiosConfig.headers = { Authorization: `${refreshToken}` };

  try {
    const res = await axios(axiosConfig);

    if (res.data && res.status === 200) {
      localStorage.setItem(
        'admin',
        JSON.stringify({ accessToken: res.data.accessToken, refreshToken: res.data.refreshToken })
      );
    }
  } catch (err) {
    console.error(err);
  }
};
