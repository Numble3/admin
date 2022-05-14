import { AlertType } from 'src/typings/common';
import useSWR from 'swr';

export const useAlert = () => {
  const { data: alert, mutate } = useSWR<AlertType>('/local/alert');

  const onShowAlert = (msg: string, type?: 'error' | 'success') => {
    mutate({ msg, visible: true, type: type || 'error' });
  };

  const onCloseAlert = () => {
    mutate({ msg: alert?.msg ?? '', visible: false, type: alert?.type ?? 'error' });
  };

  return { alert, onShowAlert, onCloseAlert };
};
