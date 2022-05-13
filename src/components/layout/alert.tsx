import { Alert } from '@mui/material';
import { useEffect } from 'react';

const AlertPopup = ({
  visible,
  msg,
  onClose,
}: {
  visible: boolean;
  msg: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (visible) {
      const interval = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(interval);
    }
  }, [visible]);

  return (
    <div id='alert' className={`top-5 ${visible ? 'translate-y-0' : 'translate-y-[-150%]'}`}>
      <Alert severity='error'>{msg}</Alert>
    </div>
  );
};

export default AlertPopup;
