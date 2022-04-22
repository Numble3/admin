import { Button } from '@mui/material';
import { Video } from 'src/types/common';
import { useNavigate } from 'react-router-dom';

export default function VideoItem({
  videoItem,
  handleSetOpen,
}: {
  videoItem: Video;
  handleSetOpen: () => void;
}) {
  const navigate = useNavigate();

  return (
    <>
      <img src={videoItem.thumbnail} alt='thumbnail' />
      <p className='text-center font-bold'>{videoItem.title}</p>
      <p className='text-center'>{videoItem.accountNickname}</p>
      <div className='flex-column flex justify-center'>
        <Button
          onClick={() => navigate(`${videoItem.id}`)}
          style={{ margin: '0 3px' }}
          variant='contained'
        >
          수정
        </Button>
        <Button
          onClick={() => handleSetOpen()}
          style={{ margin: '0 3px' }}
          variant='contained'
          color='error'
        >
          삭제
        </Button>
      </div>
    </>
  );
}
