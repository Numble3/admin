import { useEffect, useState } from 'react';
import { AlertType } from 'src/types/common';

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertType>({
    visible: false,
    msg: '',
  });

  const onToggleAlert = (msg?: string) => {
    setAlert(p => ({ visible: !p.visible, msg: msg ?? '' }));
  };

  const onShowAlert = (msg: string) => {
    setAlert({ visible: true, msg });
  };

  const onCloseAlert = () => {
    setAlert(p => ({ ...p, visible: false }));
  };

  return { alert, onToggleAlert, onShowAlert, onCloseAlert };
};
