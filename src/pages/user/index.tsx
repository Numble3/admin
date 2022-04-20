import React, { useCallback, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableFooter,
  TablePagination,
  Paper,
  TableRow,
} from '@mui/material';
import { getdummyUser } from './dummy';

const users = getdummyUser();

export default function UserPage() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },[page]);
    
  return (
    <div>
      <h1>User Page</h1>
      <div className={`px-6 pt-6`}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Id</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Nickname</TableCell>
                <TableCell align='center'>date joined</TableCell>
                <TableCell align='center'>last login</TableCell>
                <TableCell align='center'>status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.slice(page * 10, (page + 1) * 10).map(v => (
                <TableRow key={v.id}>
                  <TableCell align='center'>{v.id}</TableCell>
                  <TableCell align='center'>{v.email}</TableCell>
                  <TableCell align='center'>{v.nickname}</TableCell>
                  <TableCell align='center'>{v.dateJoin}</TableCell>
                  <TableCell align='center'>{v.lastLogin}</TableCell>
                  <TableCell align='center'>버튼</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={users.length}
                  page={page}
                  rowsPerPage={10}
                  onPageChange={handleChangePage}
                  rowsPerPageOptions={[]}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
