import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

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
  if (request.params) axiosConfig.params = request.params;

  getAuth(axiosConfig);

  try {
    const res = await axios(axiosConfig);
    console.log('res', res);

    if (res.data && res.status === 200) {
      return { data: res.data, error: null };
    }
    throw res;
  } catch (err) {
    console.error(err);
    let errRes: ErrorType = { data: { message: '' }, status: -1, statusText: '' };

    //401에러 확인
    if (axios.isAxiosError(err)) {
      errRes.data.message = (err.response?.data as { message: string }).message ?? '';
      errRes.status = err.response?.status ?? -1;
      errRes.statusText = err.response?.statusText ?? '';
    }

    return { data: null, error: errRes };
  }
};

const getAuth = (axiosConfig: AxiosRequestConfig) => {
  const token = JSON.parse(localStorage.getItem('admin') || 'null');
  if (token && token.accesToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.accessToken}`;
  }
};
