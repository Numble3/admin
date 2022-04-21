import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { User } from 'src/types/common';
import Profile from './profile';
import CustomTable from './table';

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
    <div className={`px-6 pt-6 `}>
      <h1 className={`mb-2 font-bold`}>User {'>'} DashBoard</h1>
      <h3>Profile</h3> <hr />
      <Profile user={user} />
      <h3>Upload Video</h3> <hr className='mb-3' />
      <CustomTable tableType='video' headers={headers} videoList={user.video} />
    </div>
  );
}
