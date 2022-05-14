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
