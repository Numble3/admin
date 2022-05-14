import { sendRequest } from 'src/api';
import { VideoList } from 'src/typings/common';

export const useMain = () => {
  const videoList = async (page: number) => {
    const { data, error } = await sendRequest<VideoList>({
      method: 'GET',
      path: '/api/admin/videos',
      params: { page, size: 10 },
    });
    return { data, error };
  };

  return { videoList };
};
