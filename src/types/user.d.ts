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
