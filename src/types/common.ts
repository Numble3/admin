import { ReactNode } from 'react';

export type SidebarType = {
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

export type AlertType = { visible: boolean; msg: string };
