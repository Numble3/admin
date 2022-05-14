import { sendRequest } from 'src/api';

export const useUser = () => {
  const userList = async (page: number, size: number) => {
    const { data, error } = await sendRequest<IUserRes>({
      method: 'GET',
      path: '/api/admin/accounts/all',
      params: { page, size },
    });
    return { data, error };
  };

  const withdraw = async (id: number) => {
    const { error } = await sendRequest<IUserRes>({
      method: 'DELETE',
      path: `/api/admin/accounts/withdrawal/${id}`,
    });
    return { error };
  };

  return { userList, withdraw };
};
