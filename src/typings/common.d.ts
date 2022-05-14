import { ReactNode } from 'react';

type SidebarType = {
  label: string;
  path: string;
  icon: ReactNode;
};

type AlertType = { visible: boolean; msg: string; type: 'error' | 'success' };

type ListRes = {
  nowPage: number;
  size: number;
  totalPage: number;
  totalCount: number;
};

type UserList = ListRes & {
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

type VideoList = ListRes & {
  videos: Video[];
};

type Video = {
  nickname: string;
  thumbnailUrl: string;
  title: string;
  videoId: string;
  videoAdminState: 'deleted' | null; // null: 삭제 안됨
};
