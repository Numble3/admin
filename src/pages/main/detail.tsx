import { Link, useParams } from 'react-router-dom';
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
import { lazy, useEffect, useState } from 'react';
import { useMain } from 'src/hooks/use-main';
import { VideoDetail, VideoType } from 'src/typings/common';

const transType = (v: VideoType) => (v === 'EMBEDDED' ? '임베드 영상' : '직접 업로드');

const header = ['사용자 보기', '닉네임', '동영상 타입', '비디오 URL'];
const Modal = lazy(() => import('src/components/common/modal'));

export default function MainDetail() {
  const [videoData, setVidoeData] = useState<VideoDetail>();

  const { id } = useParams();
  const { videoDetail } = useMain();

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const { data, error } = await videoDetail(id ?? '');
    if (error) {
      alert('에러가 발생했습니다.');
    }
    data && setVidoeData(data);
  };

  /* modal */
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className='px-6 pt-6 font-bold'>메인 콘텐츠 {'>'} 수정</h1>
      <div className='mx-10 flex items-center py-8'>
        <div className='flex w-full justify-center'>
          <img
            src={videoData?.thumbnailUrl}
            alt='thumbnail'
            className='h-[200px] w-[400px] bg-gray-100 object-contain'
          />
        </div>
        <div className='px-7'>
          <p>
            <strong>제목:</strong> {videoData?.title}
          </p>
          <p>
            <strong>설명:</strong> {videoData?.content}
          </p>
          <p>
            <strong>업로드일자:</strong> {videoData?.createdAt}
          </p>
          <p>
            <span>
              <strong>조회수:</strong> {videoData?.view}
            </span>
            <span className='px-3'>
              <strong>좋아요 수:</strong> {videoData?.like}
            </span>
          </p>
        </div>
      </div>
      <div className='mx-10'>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {header.map(v => (
                  <TableCell align='center' key={v}>
                    {v}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>
                  <Link to={`/user/${videoData?.accountId}`}>
                    <Button
                      onClick={() => setOpen(true)}
                      style={{ margin: '0 3px' }}
                      variant='contained'
                      color='primary'
                    >
                      상세
                    </Button>
                  </Link>
                </TableCell>
                <TableCell align='center'>{videoData?.nickname}</TableCell>
                <TableCell align='center'>{transType(videoData?.type ?? 'EMBEDDED')}</TableCell>
                <TableCell align='center'>
                  <a
                    className='text-sky-600 decoration-sky-600 decoration-solid'
                    href={videoData?.videoUrl}
                  >
                    {videoData?.videoUrl}
                  </a>
                </TableCell>
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
          삭제
        </Button>
      </div>
      <Modal {...{ onClose, open }} title='영상 삭제' content='정말 영상을 삭제하시겠습니까?' />
    </div>
  );
}
