import { Button } from '@mui/material';
import { Video } from 'src/typings/common';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

const VideoItem = ({ video, onDelete }: { video: Video; onDelete: (id: number) => void }) => {
  const navigate = useNavigate();

  return (
    <>
      <img src={video.thumbnailUrl} alt='thumbnail' className='h-[200px] w-[200px] object-cover' />
      <p className='overflow-hidden text-ellipsis whitespace-nowrap text-center font-bold'>
        {video.title}
      </p>
      <p className='mb-3 overflow-hidden text-ellipsis whitespace-nowrap text-center'>
        {video.nickname}
      </p>
      <div className='flex-column flex justify-center'>
        <Button
          onClick={() => navigate(`${video.videoId}`)}
          style={{ margin: '0 3px' }}
          variant='contained'
        >
          수정
        </Button>
        <Button
          onClick={() => onDelete(Number(video.videoId))}
          style={{ margin: '0 3px' }}
          variant='contained'
          color='error'
        >
          삭제
        </Button>
      </div>
    </>
  );
};

export default memo(VideoItem);
