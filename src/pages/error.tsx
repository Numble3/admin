import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='grid h-full w-full place-items-center bg-gray-200'>
      <div className='flex flex-col items-center'>
        <CancelOutlinedIcon sx={{ width: '20ch', height: '20ch', color: 'white' }} />
        <h1 className='font-semibold text-gray-500'>잘못된 접근입니다.</h1>

        <button
          onClick={handleBack}
          className='mt-10 cursor-pointer rounded-lg bg-white py-3 px-20 font-medium text-gray-500 shadow-lg shadow-gray-300'
        >
          돌아가기
        </button>
      </div>
    </div>
  );
}
