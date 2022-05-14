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
import { useNavigate } from 'react-router-dom';
import { User } from 'src/typings/common';

interface Props {
  currentPage: number;
  totalPage: number;
  userList: User[];
  handleChangePage: (newPage: number) => void;
  handleSetOpen: (id: number) => void;
}

const UserTable = ({
  currentPage,
  totalPage,
  userList,
  handleChangePage,
  handleSetOpen,
}: Props) => {
  const navigate = useNavigate();
  const headers: string[] = ['이메일', '닉네임', '가입일', '마지막 로그인', '상태변경'];

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
                        onClick={() => handleSetOpen(v.id)}
                      >
                        탈퇴
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
        <Pagination count={totalPage} page={currentPage} onChange={(_, p) => handleChangePage(p)} />
      </div>
    </div>
  );
};

export default UserTable;
