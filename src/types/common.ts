import { ReactNode } from 'react';

export type SidebarType = {
  label: string;
  path: string;
  icon: ReactNode;
};

export type User = {
  id: number;
  email: string;
  nickname: string;
  dateJoin: string;
  lastLogin: string;
  video: Video[];
};

export type Video = {
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
