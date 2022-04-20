import { getdummyUser } from '../user/dummy';
import { Pagination } from '@mui/material';
import { lazy, useState, useCallback } from 'react';

const CustomAlert = lazy(() => import('src/components/custom/alert'));
const Video = lazy(() => import('./video'));

export default function MainPage() {
  const [open, setOpen] = useState(false);
  const handleSetOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(1);
  const videos = getdummyUser().map(user => {
    return user.video;
  });
  const combindVideo = videos.reduce((prev, next) => {
    return prev.concat(next);
  });
  const sortedVideos = combindVideo.sort(function (a, b) {
    return a.show_id - b.show_id;
  });

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, newPage: number) => {
      setPage(newPage);
    },
    [page]
  );

  return (
    <div>
      <h1 className='px-6 pt-6 font-bold'>메인 콘텐츠</h1>
      <div className={`grid grid-cols-5 gap-5 px-6 py-8`}>
        {sortedVideos.slice((page - 1) * 10, page * 10).map(video => {
          return (
            <div key={video.show_id}>
              <Video videoItem={video} handleSetOpen={handleSetOpen} />
            </div>
          );
        })}
      </div>
      <div className='flex flex-row-reverse px-10 pb-10'>
        <Pagination count={sortedVideos.length / 10} page={page} onChange={handleChangePage} />
      </div>
      <CustomAlert {...{ onClose, open }} title='영상 삭제' content='정말 삭제하시겠습니까?' />
    </div>
  );
}
