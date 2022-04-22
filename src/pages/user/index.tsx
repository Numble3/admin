import { getdummyUser } from './dummy';
import CustomTable from '../../components/user/table';

const users = getdummyUser();
const headers: string[] = ['user id', 'Email', 'nickname', 'dated joined', 'last login', 'status'];

export default function UserPage() {
  return (
    <div>
      <h1 className={`px-6 pt-6 font-bold`}>유저</h1>
      <div>
        <CustomTable tableType='user' headers={headers} userList={users} />
      </div>
    </div>
  );
}
