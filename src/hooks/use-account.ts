import { sendRequest } from 'src/api';

export const useAccounts = () => {
  const accountList = async (page: number, size: number) => {
    const { data, error } = await sendRequest<IUserRes>({
      method: 'GET',
      path: '/api/admin/accounts/all',
      params: { page, size },
    });
    return { data, error };
  };

  return { accountList };
};
