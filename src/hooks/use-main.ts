import { sendRequest } from 'src/api';
import { VideoDetail, VideoList } from 'src/typings/common';

export const useMain = () => {
  const videoList = async (page: number) => {
    const { data, error } = await sendRequest<VideoList>({
      method: 'GET',
      path: '/api/admin/videos',
      params: { page, size: 10 },
    });
    return { data, error };
  };

  const videoDetail = async (id: string) => {
    const { data, error } = await sendRequest<VideoDetail>({
      method: 'GET',
      path: `/api/admin/videos/${id}`,
    });

    console.log('data', data);

    return { data, error };
  };

  const deleteVideo = async (id: number) => {
    const { error } = await sendRequest({
      method: 'DELETE',
      path: `/api/admin/videos/${id}`,
    });

    return error;
  };
  return { videoList, deleteVideo, videoDetail };
};
