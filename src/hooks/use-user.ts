import { sendRequest } from 'src/api';
import { UserDetail, UserList, VideoList } from 'src/typings/common';

export const useUser = () => {
  const userList = async (page: number, size: number) => {
    const { data, error } = await sendRequest<UserList>({
      method: 'GET',
      path: '/api/admin/accounts/all',
      params: { page, size },
    });
    return { data, error };
  };

  const withdraw = async (id: number) => {
    const { error } = await sendRequest<UserList>({
      method: 'DELETE',
      path: `/api/admin/accounts/withdrawal/${id}`,
    });
    return { error };
  };

  const userDetail = async (id: string) => {
    const { data, error } = await sendRequest<UserDetail>({
      method: 'GET',
      path: `/api/admin/accounts/${id}`,
    });

    return { data, error };
  };

  const userVideo = async (id: string, page: number) => {
    const { data, error } = await sendRequest<VideoList>({
      method: 'GET',
      path: `/api/admin/accounts/videos/${id}`,
      params: { page, size: 10 },
    });

    return { data, error };
  };

  return { userList, withdraw, userDetail, userVideo };
};
