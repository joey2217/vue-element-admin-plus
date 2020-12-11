import { NowRequest, NowResponse } from '@vercel/node';
import { Random } from 'mockjs';

interface UserInfo {
  username: string;
  nickname: string;
  roles: string[];
  avatar?: string;
}

export default (request: NowRequest, response: NowResponse) => {
  const nickname = Random.last();
  const userInfo: UserInfo = {
    nickname,
    username: Random.first(),
    roles: [],
    avatar: Random.image('100x100', '#4A7BF7', nickname.slice(0, 1)),
  };
  response.status(200).json(userInfo);
};
