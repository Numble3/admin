import React, { useCallback, useState } from 'react';
import { getdummyUser } from './dummy';
import { useNavigate } from 'react-router-dom';
import CustomTable from './table';

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
