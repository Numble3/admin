import { ReactNode } from 'react';

type SidebarType = {
  label: string;
  path: string;
  icon: ReactNode;
};

export type video = {
  id: number;
  type: string;
  description: string;
  thumbnail: string;
  url: string;
  showId: number;
  title: string;
  accountNickname: string;
  view: number;
  like: number;
  createdDate: string;
  accountId: string;
};

type AlertType = { visible: boolean; msg: string; type: 'error' | 'success' };

type User = {
  id: number;
  email: string;
  nickname: string;
  createdAt: string;
  lastLogin: string;
};

type IUserRes = {
  nowPage: number;
  size: number;
  totalCount: number;
  totalPage: number;
  accountDtos: User[];
};

type UserDetail = {
  id: number;
  email: string;
  nickname: string;
  lastLogin: string;
  createdAt: string;
};

type Video = {};
