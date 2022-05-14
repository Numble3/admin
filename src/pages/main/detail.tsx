import { useParams } from 'react-router-dom';
import { getdummyUser } from '../user/dummy';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  Button,
  Paper,
  TableRow,
} from '@mui/material';
import { lazy, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = lazy(() => import('src/components/common/modal'));

export default function MainDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  /* Data */
  const videos = getdummyUser().map(user => {
    return user.video;
  });
  const combinedVideos = videos.reduce((prev, next) => {
    return prev.concat(next);
  });
  const selectedVideo = combinedVideos.find(video => {
    return video.id.toString() === id;
  });

  /* modal */
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className='px-6 pt-6 font-bold'>메인 콘텐츠 {'>'} 수정</h1>
      <div className='flex items-center px-6 py-8'>
        <img width='40%' src={selectedVideo?.thumbnail} alt='thumnail' />
        <div className='px-7'>
          <p>
            <strong>title:</strong> {selectedVideo?.title}
          </p>
          <p>
            <strong>description:</strong> {selectedVideo?.description}
          </p>
          <p>
            <strong>update date:</strong> {selectedVideo?.created_date}
          </p>
          <p>
            <span>
              <strong>view:</strong> {selectedVideo?.view}
            </span>
            <span className='px-3'>
              <strong>like:</strong> {selectedVideo?.like}
            </span>
          </p>
        </div>
      </div>
      <div className='mx-10'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Show Id</TableCell>
                <TableCell align='center'>Id</TableCell>
                <TableCell align='center'>Type</TableCell>
                <TableCell align='center'>User Id</TableCell>
                <TableCell align='center'>User Nickname</TableCell>
                <TableCell align='center'>Thumbnail</TableCell>
                <TableCell align='center'>Video URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>
                  <input
                    className='w-12 rounded py-1 px-2 text-center outline'
                    type='text'
                    maxLength={4}
                    placeholder={`${selectedVideo?.showId}`}
                  />
                </TableCell>
                <TableCell align='center'>{selectedVideo?.id}</TableCell>
                <TableCell align='center'>{selectedVideo?.type}</TableCell>
                <TableCell align='center'>{selectedVideo?.accountId}</TableCell>
                <TableCell align='center'>{selectedVideo?.accountNickname}</TableCell>
                <TableCell align='center'>{selectedVideo?.thumbnail}</TableCell>
                <TableCell align='center'>{selectedVideo?.url}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='flex justify-end px-10 py-10'>
        <Button
          onClick={() => setOpen(true)}
          style={{ margin: '0 3px' }}
          variant='contained'
          color='error'
        >
          Delete
        </Button>
        <Button onClick={() => navigate('..')} style={{ margin: '0 3px' }} variant='contained'>
          Edit Complete
        </Button>
      </div>
      <Modal {...{ onClose, open }} title='영상 삭제' content='정말 영상을 삭제하시겠습니까?' />
    </div>
  );
}
