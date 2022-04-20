import {getdummyUser} from "../user/dummy";
import {Pagination} from '@mui/material';
import {Button} from '@mui/material';
import {lazy, useState, useCallback, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const CustomAlert = lazy(() => import('src/components/custom/alert'));

export default function MainPage() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const [page, setPage] = useState(1);
  const videos = getdummyUser().map((user)=>{
    return user.video;
  })
  const combindVideo = videos.reduce((prev, next)=>{
    return prev.concat(next);
  });
  const sortedVideos = combindVideo.sort(function(a, b){
    return a.show_id - b.show_id;
  })
  useEffect(()=>{
    console.log(sortedVideos.slice((page-1) * 10, page * 10));
  },[]);
  const handleChangePage = useCallback((event: React.ChangeEvent<unknown>, newPage: number) => {
      setPage(newPage);
    },[page]);
  
  return (
    <div>
      <h1 className="px-6 pt-6 font-bold">메인 콘텐츠</h1>
      <div className={`px-6 py-8 grid grid-cols-5 gap-5`}>
        {sortedVideos.slice((page-1) * 10, page * 10).map(video => {
            return(    
              <div key={video.show_id}>
                <img src={video.thumbnail} alt="thumbnail" />
                <p className="font-bold text-center">{video.title}</p>
                <p className="text-center">{video.account_nickname}</p>
                <div className="flex flex-column justify-center">
                  <Button onClick={() => navigate(`${video.id}`)} style={{margin: '0 3px'}} variant="contained">수정</Button>
                  <Button onClick={() => setOpen(true)} style={{margin: '0 3px'}} variant="contained" color="error">삭제</Button>
                </div>
              </div>
            );
        })}
        </div>
         <div className="px-10 pb-10 flex flex-row-reverse">
          <Pagination count={sortedVideos.length/10} page={page} onChange={handleChangePage} />
        </div>
        <CustomAlert {...{ onClose, open }} title='영상 삭제' content='정말 삭제하시겠습니까?' />
    </div>
  );
}
