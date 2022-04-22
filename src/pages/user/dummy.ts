import { User, video } from 'src/types/common';
import * as faker from 'faker';

export const getdummyUser = (): User[] => {
  return Array(50)
    .fill(this)
    .map((v, i) => {
      const nickname = faker.name.findName();
      const email = faker.internet.email();
      return {
        id: i + 1,
        nickname,
        email,
        lastLogin: '2022-04-30',
        dateJoin: '2022-03-01',
        video: getDummyvideos(i, nickname, email),
      };
    });
};

const getDummyvideos = (user_index: number, nickname: string, email: string): video[] => {
  const date = faker.date.past();
  return Array(10)
    .fill(this)
    .map((v, i) => ({
      id: user_index * 10 + i,
      thumbnail: faker.image.imageUrl(),
      url: 'http://sample.url.com',
      type: 'embed',
      description: 'sample description',
      show_id: user_index * 10 + (9 - i),
      title: `${user_index * 10 + (9 - i)}번째 영상`,
      account_nickname: nickname,
      view: Math.floor(Math.random() * 100),
      like: Math.floor(Math.random() * 100),
      created_date:
        date.getFullYear() +
        '.' +
        (date.getMonth() + 1 > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1)) +
        '.' +
        (date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate().toString()),
      account_id: email,
    }));
};
