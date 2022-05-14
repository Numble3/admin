import { lazy, memo, Suspense } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useAdmin } from 'src/hooks/use-admin';
import { useNavigate } from 'react-router-dom';

const Modal = lazy(() => import('src/components/common/modal'));

const LayoutHeader = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const onOk = async () => {
    const error = await logout();
    if (error) {
      console.error(error);
    }
    localStorage.removeItem('admin');
    navigate('/login');
    setOpen(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className='relative h-header w-full bg-gray-200'>
      <div
        className='absolute right-0 m-4 cursor-pointer rounded-full bg-white p-3'
        onClick={() => setOpen(true)}
      >
        <LogoutIcon />
      </div>
      <Suspense fallback={null}>
        <Modal
          {...{ onClose, open, onOk }}
          title='로그아웃'
          content='정말 로그아웃 하시겠습니까?'
        />
      </Suspense>
    </header>
  );
};

export default memo(LayoutHeader);
