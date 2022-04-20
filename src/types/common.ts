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
  vedio: Vedio[];
};

export type Vedio = {
  id: number,
  type: string,
  description: string,
  thumbnail: string,
  url: string,
};