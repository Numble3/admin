import { lazy, memo, Suspense } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

const CustomAlert = lazy(() => import('src/components/custom/alert'));

const LayoutHeader = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className='fixed h-header w-full bg-gray-200'>
      <div
        className='absolute right-0 m-4 cursor-pointer rounded-full bg-white p-3'
        onClick={() => setOpen(true)}
      >
        <LogoutIcon />
      </div>
      <Suspense fallback={null}>
        <CustomAlert
          {...{ onClose, open }}
          title='로그아웃'
          content='정말 로그아웃 하시겠습니까?'
        />
      </Suspense>
    </header>
  );
};

export default memo(LayoutHeader);
