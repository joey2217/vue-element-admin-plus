import { NowRequest, NowResponse } from '@vercel/node';
import { Random } from 'mockjs';
interface Menu {
  fullPath: string;
  title: string;
  redirect?: string;
  icon?: string;
  children?: Menu[];
}
interface UserInfo {
  username: string;
  nickname: string;
  roles: string[];
  menus: Menu[];
  avatar?: string;
}

const menus: Menu[] = [
  {
    fullPath: '/user',
    title: 'User',
    icon: 'user',
  },
  {
    fullPath: '/form',
    title: 'Form',
    icon: 'form',
  },
  {
    fullPath: '/menu',
    title: 'Menu',
    icon: 'menu',
    redirect: '/menu/menu1/menu1-1',
    children: [
      {
        fullPath: '/menu/menu1',
        title: 'Menu1',
        redirect: '/menu/menu1/menu1-1',
        children: [
          {
            fullPath: '/menu/menu1/menu1-1',
            title: 'Menu1-1',
          },
          {
            fullPath: '/menu/menu1/menu1-2',
            title: 'Menu1-2',
          },
        ],
      },
      {
        fullPath: '/menu/menu2',
        title: 'Menu2',
      },
    ],
  },
];
export default (request: NowRequest, response: NowResponse) => {
  const nickname = Random.last();
  const userInfo: UserInfo = {
    nickname,
    username: Random.first(),
    roles: ['admin'],
    menus,
    avatar: Random.image('100x100', '#4A7BF7', nickname.slice(0, 1)),
  };
  response.status(200).json(userInfo);
};
