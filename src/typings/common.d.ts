import { ReactNode } from 'react';

type SidebarType = {
  label: string;
  path: string;
  icon: ReactNode;
};

type AlertType = { visible: boolean; msg: string; type: 'error' | 'success' };

type UserList = {
  nowPage: number;
  size: number;
  totalCount: number;
  totalPage: number;
  accountDtos: User[];
};

type User = {
  id: number;
  email: string;
  nickname: string;
  createdAt: string;
  lastLogin: string;
};

type UserDetail = {
  id: number;
  email: string;
  nickname: string;
  lastLogin: string;
  createdAt: string;
};

type VideoList = {
  videos: Video[];
  nowPage: number;
  size: number;
  totalPage: number;
  totalCount: number;
};

type Video = {
  nickname: string;
  thumbnailUrl: string;
  title: string;
  videoId: string;
};
