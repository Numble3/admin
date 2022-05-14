import UserTable from '../../components/user/table';
import { useUser } from 'src/hooks/use-user';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Modal } from 'src/components/common';
import { useAlert } from 'src/components/user/use-common';
import { UserList } from 'src/typings/common';

export default function UserPage() {
  const [data, setData] = useState<UserList>({
    nowPage: 1,
    size: 10,
    totalCount: 0,
    totalPage: 0,
    accountDtos: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const selectUser = useRef(-1);

  const { userList, withdraw } = useUser();
  const { onShowAlert } = useAlert();

  useEffect(() => {
    fetchUser();
  }, [currentPage]);

  const fetchUser = async () => {
    const { data, error } = await userList(currentPage, 10);
    if (data) {
      setData(data);
    }
    if (error) {
      alert('예상치 못한 에러가 발생했습니다.');
    }
  };

  const onClose = () => {
    setOpen(false);
  };
  const onOk = async () => {
    const { error } = await withdraw(selectUser.current);
    if (error) {
      onShowAlert(error.data.message);
    }
    await fetchUser();
    onShowAlert('사용자를 탈퇴했습니다.', 'success');
    setOpen(false);
  };
  const handleSetOpen = (id: number) => {
    setOpen(true);
    selectUser.current = id;
  };

  /* pagenation */
  const handleChangePage = useCallback(
    (newPage: number) => {
      setCurrentPage(newPage);
    },
    [currentPage]
  );

  return (
    <>
      <h1 className={`px-6 pt-6 font-bold`}>유저</h1>
      <div>
        <UserTable
          userList={data?.accountDtos}
          totalPage={data.totalPage}
          {...{ currentPage, handleChangePage, handleSetOpen }}
        />
      </div>
      <Modal
        {...{ onClose, open, onOk }}
        title={`회원 탈퇴`}
        content={`정말 회원을 탈퇴하시겠습니까?`}
      />
    </>
  );
}
