import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  const fetchUser = async () => {
    const { data, error } = await userDetail(String(id));
    if (error) {
      alert('예상치 못한 에러가 발생했습니다.');
      return;
    }
    setUser(data);
  };

  return (
    <main className={`px-6 pt-6`}>
      <header>
        <h1 className={`mb-2 font-bold`}>User {'>'} DashBoard</h1>
      </header>
      <section>
        <h3>Profile</h3> <hr />
        <Profile user={user} />
      </section>
      <section>
        <h3>Upload Video</h3> <hr className='mb-3' />
        {/* <UserDetailTable tableType='video' headers={headers} videoList={user.video} /> */}
      </section>
    </main>
  );
}
