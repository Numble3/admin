import { memo } from 'react';
import { UserDetail } from 'src/typings/common';

const header = ['이메일', '닉네임', '가입일', '마지막 로그인'];
interface Props {
  user: UserDetail | null;
}

const Profile = ({ user }: Props) => {
  return (
    <div className={`w-full py-10 text-center `}>
      <div className={`grid grid-cols-4 gap-x-4 gap-y-10 p-10 shadow-md`}>
        {header.map(v => (
          <div key={v} className='font-bold'>
            {v}
          </div>
        ))}
        {user &&
          Object.keys(user)
            .filter(v => v !== 'id')
            .map(v => <div key={v}>{user[v as keyof UserDetail]}</div>)}
      </div>
    </div>
  );
};

export default memo(Profile);
