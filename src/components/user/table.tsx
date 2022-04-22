import {
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomAlert } from 'src/components/custom';
import { User, video } from 'src/types/common';

interface Props {
  tableType: string;
  headers: string[];
  userList?: User[];
  videoList?: video[];
}

const CustomTable = ({ tableType, headers, userList, videoList }: Props) => {
  const navigate = useNavigate();

  /* pagenation */
  const [page, setPage] = useState(1);
  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, newPage: number) => {
      setPage(newPage);
    },
    [page]
  );
  
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
                      <TableCell align='center'>{v.dateJoin}</TableCell>
                      <TableCell align='center'>{v.lastLogin}</TableCell>
                      <TableCell style={{ padding: 0 , height: 60 }} align='center'>
                        <div className={`flex h-full flex-col items-center justify-evenly`}>
                          <Button
                            style={{ padding: 0, width: 100 }}
                            variant='contained'
                            size='small'
                            onClick={() => navigate(`${v.id}`, { state: { user: v } })}
                          >
                            dashboard
                          </Button>
                          <Button
                            style={{ padding: 0, width: 100 }}
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
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className='flex justify-end px-10 pb-10'>
        <Pagination count={length / rowPerPage} page={page} onChange={handleChangePage} />
      </div>
      <CustomAlert
        {...{ onClose, open }}
        title='영상 삭제'
        content='정말 영상을 삭제하시겠습니까?'
      />
    </div>
  );
};

export default CustomTable;
