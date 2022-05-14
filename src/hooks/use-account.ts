import { sendRequest } from 'src/api';

export const useAccounts = () => {
  const accountList = async (page: number, size: number) => {
    const { data, error } = await sendRequest({
      method: 'GET',
      path: '/api/admin/accounts/all',
      params: { page, size },
    });
    console.log('data', data);
    console.log('error', error);
    return { data, error };
  };

  return { accountList };
};
