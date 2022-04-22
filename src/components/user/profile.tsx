import React from 'react';
import { User } from 'src/types/common';

interface Props {
  user: User;
}

const Profile = ({ user }: Props) => {
  return (
    <div className={`w-full py-10 text-center `}>
      <div className={`grid grid-cols-5 gap-x-5 gap-y-10 p-10 shadow-md`}>
        <div className='font-bold'>user id</div>
        <div className='font-bold'>Email</div>
        <div className='font-bold'>nickname</div>
        <div className='font-bold'>date joined</div>
        <div className='font-bold'>last login</div>
        <div>{user.id}</div>
        <div>{user.email}</div>
        <div>{user.nickname}</div>
        <div>{user.dateJoin}</div>
        <div>{user.lastLogin}</div>
      </div>
    </div>
  );
};

export default Profile;
