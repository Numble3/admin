import { Pagination } from '@mui/material';
import { lazy, useState, useCallback, useEffect } from 'react';
import VideoItem from 'src/components/main/videoItem';
import { useMain } from 'src/hooks/use-main';
import { VideoList } from 'src/typings/common';

const Modal = lazy(() => import('src/components/common/modal'));

export default function MainPage() {
  const [data, setData] = useState<VideoList>({
    videos: [],
    nowPage: 1,
    size: 10,
    totalPage: 1,
    totalCount: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { videoList } = useMain();

  useEffect(() => {
    fetchVideoList();
  }, [currentPage]);

  const fetchVideoList = async () => {
    const { data, error } = await videoList(currentPage);
    if (error) {
      alert('예상치 못한 에러가 발생했습니다.');
      return;
    }
    if (data) {
      setData(data);
      // setCurrentPage(data.nowPage);
    }
  };

  /* modal */
  const [open, setOpen] = useState(false);
  const onDelete = (id: string) => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  /* pagination */
  const handleChangePage = (newPage: number) => setCurrentPage(newPage);

  return (
    <div>
      <h1 className='px-6 pt-6 font-bold'>메인 콘텐츠</h1>
      <div className={`grid grid-cols-5 gap-5 px-6 py-8`}>
        {data.videos.map(v => {
          return (
            <div key={v.videoId}>
              <VideoItem video={v} onDelete={onDelete} />
            </div>
          );
        })}
      </div>
      <div className='flex justify-end px-10 pb-10'>
        <Pagination
          count={data.totalPage}
          page={currentPage}
          onChange={(_, p) => handleChangePage(p)}
        />
      </div>
      <Modal {...{ onClose, open }} title='영상 삭제' content='정말 영상을 삭제하시겠습니까?' />
    </div>
  );
}
