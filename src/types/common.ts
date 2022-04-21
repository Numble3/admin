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
  video: video[];
};

export type video = {
  id: number;
  type: string;
  description: string;
  thumbnail: string;
  url: string;
  show_id: number;
  title: string;
  account_nickname: string;
  view: number;
  like: number;
  created_date: string;
  account_id: string;
};
