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
import { Modal } from 'src/components/common';
import { User, video } from 'src/typings/common';

interface Props {
  page: number;
  handleChangePage: (event: ChangeEvent<unknown>, newPage: number) => void;

  tableType: string;
  headers: string[];
  userList?: User[];
  videoList?: video[];
}

const UserDetailTable = ({
  page,
  tableType,
  headers,
  userList,
  videoList,
  handleChangePage,
}: Props) => {
  const navigate = useNavigate();

  /* modal */
  const [open, setOpen] = useState(false);
  const handleSetOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  /* constant */
  const length: number = tableType === 'video' ? videoList!.length : userList!.length;
  const rowPerPage: number = tableType === 'video' ? 5 : 10;
  const alertMessage: string = tableType === 'video' ? '영상' : '유저';

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
              {tableType === 'video'
                ? videoList!.slice((page - 1) * rowPerPage, page * rowPerPage).map(v => (
                    <TableRow key={v.id}>
                      <TableCell align='center'>{v.id}</TableCell>
                      <TableCell align='center'>{v.type}</TableCell>
                      <TableCell align='center'>{v.title}</TableCell>
                      <TableCell align='center'>{v.description}</TableCell>
                      <TableCell align='center'>{v.thumbnail}</TableCell>
                      <TableCell align='center'>{v.url}</TableCell>
                      <TableCell style={{ padding: 0 }} align='center'>
                        <div className={`flex h-full flex-col items-center justify-evenly`}>
                          <Button
                            style={{ padding: 0 }}
                            variant='contained'
                            color='error'
                            size='small'
                            onClick={() => handleSetOpen()}
                          >
                            delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                : userList!.slice((page - 1) * rowPerPage, page * rowPerPage).map(v => (
                    <TableRow key={v.id}>
                      <TableCell align='center'>{v.id}</TableCell>
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
        <Pagination count={length / rowPerPage} page={page} onChange={handleChangePage} />
      </div>
      <Modal
        {...{ onClose, open }}
        title={`${alertMessage} 삭제`}
        content={`정말 ${alertMessage}을 삭제하시겠습니까?`}
      />
    </div>
  );
};

export default UserDetailTable;
