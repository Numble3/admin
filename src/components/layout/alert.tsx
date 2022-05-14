import { Alert } from '@mui/material';
import { memo, useEffect } from 'react';
import { useAlert } from '../user/use-common';

const AlertPopup = () => {
  const { alert, onCloseAlert } = useAlert();

  useEffect(() => {
    if (alert?.visible) {
      const interval = setTimeout(() => {
        onCloseAlert();
      }, 3000);
      return () => clearTimeout(interval);
    }
  }, [alert]);

  return (
    <div id='alert' className={`top-5 ${alert?.visible ? 'translate-y-0' : 'translate-y-[-150%]'}`}>
      <Alert severity={alert?.type}>{alert?.msg}</Alert>
    </div>
  );
};

export default memo(AlertPopup);
