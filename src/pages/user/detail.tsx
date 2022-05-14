import { useLocation } from 'react-router-dom';
import { User } from 'src/types/common';
import Profile from '../../components/user/profile';
import  from '../../components/user/table';

const headers: string[] = ['id', 'type', 'title', 'description', 'thumbnail', 'video url', ' '];

interface RouteState {
  state: {
    user: User;
  };
}

export default function UserDetailPage() {
  const location = useLocation() as RouteState;
  const user = location.state.user;

  return (
    <main className={`px-6 pt-6 `}>
      <header>
        <h1 className={`mb-2 font-bold`}>User {'>'} DashBoard</h1>
      </header>
      <section>
        <h3>Profile</h3> <hr />
        <Profile user={user} />
      </section>
      <section>
        <h3>Upload Video</h3> <hr className='mb-3' />
        <CustomTable tableType='video' headers={headers} videoList={user.video} />
      </section>
    </main>
  );
}
