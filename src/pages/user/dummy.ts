import { User, Vedio } from 'src/types/common';
import * as faker from 'faker';

export const getdummyUser = () : User[] => {
  return Array(50).fill(this).map((v,i)=> ({
    id: i+1,
    nickname: faker.name.findName(),
    email: faker.internet.email(),
    lastLogin: '2022-04-30',
    dateJoin: '2022-03-01',
    vedio : getDummyVedios(),
  }));
};

const getDummyVedios = (): Vedio[] => {
  return Array(10).fill(this).map((v, i) => ({
      id: i,
      thumbnail: 'http://saple.thumbnail.com',
      url: 'http://sample.url.com',
      type: 'embed',
      description: 'sample description',
    }));
};
