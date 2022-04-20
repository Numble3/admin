import { User, video } from 'src/types/common';
import * as faker from 'faker';

export const getdummyUser = () : User[] => {
  return Array(50).fill(this).map((v,i)=> {
    const nickname = faker.name.findName();
    return {
    id: i+1,
    nickname,
    email: faker.internet.email(),
    lastLogin: '2022-04-30',
    dateJoin: '2022-03-01',
    video : getDummyvideos(i, nickname),
  }});
};

const getDummyvideos = (user_index:number, nickname:string): video[] => {
  return Array(10).fill(this).map((v, i) => ({
      id: i,
      thumbnail: faker.image.imageUrl(),
      url: 'http://sample.url.com',
      type: 'embed',
      description: 'sample description',
      show_id: user_index * 10 + i,
      title: `${user_index*10+i}번째 영상`,
      account_nickname : nickname
    }));
};
