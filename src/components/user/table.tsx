import {
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomAlert } from 'src/components/custom';

interface Props {
  currentPage: number;
  totalPage: number;
  handleChangePage: (event: ChangeEvent<unknown>, newPage: number) => void;
  userList: User[];
}

const CustomTable = ({ currentPage, totalPage, userList, handleChangePage }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  /* modal */
  const headers: string[] = ['이메일', '닉네임', '가입일', '마지막 로그인'];

  const handleSetOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={`px-6 py-8`}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((v, i) => (
                  <TableCell key={i} align='center'>
                    {v}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map(v => (
                <TableRow key={v.id}>
                  <TableCell align='center'>{v.email}</TableCell>
                  <TableCell align='center'>{v.nickname}</TableCell>
                  <TableCell align='center'>{v.createdAt}</TableCell>
                  <TableCell align='center'>{v.lastLogin}</TableCell>
                  <TableCell style={{ padding: 0, height: 60 }} align='center'>
                    <div className={`flex h-full flex-col items-center justify-evenly`}>
                      <Button
                        style={{ padding: 0, width: 100 }}
                        variant='contained'
                        size='small'
                        onClick={() => navigate(`${v.id}`, { state: { user: v } })}
                      >
                        대시보드
                      </Button>
                      <Button
                        style={{ padding: 0, width: 100 }}
                        variant='contained'
                        color='error'
                        size='small'
                        onClick={() => handleSetOpen()}
                      >
                        삭제
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='flex justify-end px-10 pb-10'>
        <Pagination count={totalPage} page={currentPage} onChange={handleChangePage} />
      </div>
      <CustomAlert
        {...{ onClose, open }}
        title={`회원 탈퇴`}
        content={`정말 회원을 탈퇴하시겠습니까?`}
      />
    </div>
  );
};

export default CustomTable;
