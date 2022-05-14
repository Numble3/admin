import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetailTable from 'src/components/user/detail-table';
import { useUser } from 'src/hooks/use-user';
import { UserDetail } from 'src/typings/common';
import Profile from '../../components/user/profile';

export default function UserDetailPage() {
  const [user, setUser] = useState<UserDetail | null>(null);

  const { id } = useParams();
  const { userDetail } = useUser();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = useCallback(async () => {
    const { data, error } = await userDetail(String(id));
    if (error) {
      alert('예상치 못한 에러가 발생했습니다.');
      return;
    }

    setUser(data);
  }, []);

  return (
    <main className={`px-6 pt-6`}>
      <header>
        <h1 className={`mb-2 font-bold`}>사용자 상세</h1>
      </header>
      <section className='mt-5'>
        <h3>사용자 정보</h3> <hr />
        <Profile user={user} />
      </section>
      <section>
        <h3>업로드 한 비디오</h3> <hr className='mb-3' />
        <UserDetailTable id={id ?? ''} />
      </section>
    </main>
  );
}
