import axios, { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://3.36.157.185:80';

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

  //TODO : check auth
  authorization(axiosConfig);

  try {
    const res = await axios(axiosConfig);

    if (res.data && res.status === 200) {
      return { data: res.data, error: null };
    }
    throw res;
  } catch (err) {
    console.error(err);
    let errRes: ErrorType = { data: { message: '' }, status: -1, statusText: '' };

    if (axios.isAxiosError(err)) {
      errRes.data.message = (err.response?.data as { message: string }).message ?? '';
      errRes.status = err.response?.status ?? -1;
      errRes.statusText = err.response?.statusText ?? '';
    }

    return { data: null, error: errRes };
  }
};

export const authorization = (axiosConfig: AxiosRequestConfig) => {
  const adminToken = JSON.parse(localStorage.getItem('admin') ?? 'null');

  axiosConfig.headers = adminToken ? { authorization: `Bearer ${adminToken.accessToken}` } : {};
};
