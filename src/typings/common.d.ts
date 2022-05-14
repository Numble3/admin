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
  contents: Video[];
  nowPage: number;
  size: number;
  totalPage: number;
  totalSize: number;
};

type Video = {
  nickname: string;
  thumbnailUrl: string;
  title: string;
  videoId: string;
};
