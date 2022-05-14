import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface Props {
  open: boolean;
  onOk?: () => void;
  onClose: () => void;
  title?: string;
  content?: string;
}

/** custom modal(alert) - 확인, 취소버튼이 있는 모달 */
const Modal = ({ onClose, onOk, open, title = 'title', content = 'content' }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ color: 'black' }}>
          닫기
        </Button>
        <Button onClick={onOk} autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
