import { AlertType } from 'src/types/common';
import useSWR from 'swr';

export const useAlert = () => {
  const { data: alert, mutate } = useSWR<AlertType>('/local/alert');
  // const [alert, setAlert] = useState<AlertType>({
  //   visible: false,
  //   msg: '',
  // });

  const onShowAlert = (msg: string) => {
    mutate({ msg, visible: true });
  };

  const onCloseAlert = () => {
    mutate({ msg: '', visible: false });
  };

  return { alert, onShowAlert, onCloseAlert };
};
