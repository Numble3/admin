import {
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { lazy, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMain } from 'src/hooks/use-main';
import { useUser } from 'src/hooks/use-user';
import { VideoList } from 'src/typings/common';
import { useAlert } from './use-common';

const headers = ['제목', '썸네일', '상태변경'];
const Modal = lazy(() => import('src/components/common/modal'));

const UserDetailTable = ({ id }: { id: string }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [videoData, setVideoData] = useState<VideoList>();
  const videoId = useRef(-1);
  const { userVideo } = useUser();
  const { deleteVideo } = useMain();
  const { onShowAlert } = useAlert();

  useEffect(() => {
    fetchVideo();
  }, [currentPage]);

  const fetchVideo = useCallback(async () => {
    const { data, error } = await userVideo(id, currentPage);
    if (error) {
      alert('예상치 못한 에러가 발생했습니다.');
      return;
    }
    data && setVideoData(data);
  }, []);

  /* pagination */
  const handleChangePage = (newPage: number) => setCurrentPage(newPage);

  /* modal */
  const [open, setOpen] = useState(false);
  const handleSetOpen = (id: string) => {
    videoId.current = Number(id);
    setOpen(true);
  };
  const onOk = async () => {
    const error = await deleteVideo(videoId.current);
    if (error) {
      onShowAlert('비디오를 삭제했습니다', 'error');
      return;
    }
    await fetchVideo();
    onShowAlert('비디오를 삭제했습니다', 'success');
    onClose();
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {videoData?.videos && videoData?.videos.length > 0 ? (
        <>
          <div className={`px-6 py-8`}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map((v, i) => (
                      <TableCell key={i} align='center'>
                        {v}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videoData.videos
                    ?.filter(v => v.videoAdminState !== 'deleted')
                    .map(v => (
                      <TableRow key={v.videoId}>
                        <TableCell align='center'>{v.title}</TableCell>
                        <TableCell align='center'>
                          <div className='flex w-full justify-center'>
                            <img
                              src={v.thumbnailUrl}
                              alt='thumbnail'
                              className='h-[200px] w-[200px] bg-slate-200 object-cover'
                            />
                          </div>
                        </TableCell>
                        <TableCell style={{ padding: 0 }} align='center' width={'20%'}>
                          <div className={`flex justify-center gap-3`}>
                            <Link to={`/main/${v.videoId}`}>
                              <Button
                                style={{ padding: 0 }}
                                variant='contained'
                                color='primary'
                                size='small'
                              >
                                상세
                              </Button>
                            </Link>
                            <Button
                              style={{ padding: 0 }}
                              variant='contained'
                              color='error'
                              size='small'
                              onClick={() => handleSetOpen(v.videoId)}
                            >
                              삭제
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className='flex justify-end px-10 pb-10'>
            <Pagination
              count={videoData.totalPage}
              page={currentPage}
              onChange={(_, p) => handleChangePage(p)}
            />
          </div>
        </>
      ) : (
        <h2 className='mt-10 text-center'>등록한 비디오가 없습니다.</h2>
      )}
      <Modal
        {...{ onClose, open, onOk }}
        title={`비디오 삭제`}
        content={`정말 비디오을 삭제하시겠습니까?`}
      />
    </>
  );
};

export default memo(UserDetailTable);
