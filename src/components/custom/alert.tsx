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
  onClose: () => void;
  title?: string;
  content?: string;
}

/** custom modal(alert) - 확인, 취소버튼이 있는 모달 */
const CustomAlert = ({ onClose, open, title = 'title', content = 'content' }: Props) => {
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
        <Button onClick={onClose} autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomAlert;
