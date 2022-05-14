import { getdummyUser } from './dummy';
import CustomTable from '../../components/user/table';
import { useAccounts } from 'src/hooks/use-account';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

// const users = getdummyUser();

export default function UserPage() {
  const [data, setData] = useState<IUserRes>({
    nowPage: 1,
    size: 10,
    totalCount: 0,
    totalPage: 0,
    accountDtos: [],
  });

  const [currentPage, setCurrentPage] = useState(1);

  const { accountList } = useAccounts();

  /* pagenation */
  const handleChangePage = useCallback(
    (event: ChangeEvent<unknown>, newPage: number) => {
      setCurrentPage(newPage);
    },
    [currentPage]
  );

  useEffect(() => {
    async function fetchAccount() {
      const { data, error } = await accountList(currentPage, 10);
      if (data) {
        setData(data);
      }
    }
    fetchAccount();
  }, [currentPage]);

  return (
    <div>
      <h1 className={`px-6 pt-6 font-bold`}>유저</h1>
      <div>
        <CustomTable
          userList={data?.accountDtos}
          totalPage={data.totalPage}
          {...{ currentPage, handleChangePage }}
        />
      </div>
    </div>
  );
}
