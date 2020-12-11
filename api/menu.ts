import { NowRequest, NowResponse } from '@vercel/node';

interface Menu {
  fullPath: string;
  title: string;
  redirect?: string;
  icon?: string;
  children?: Menu[];
}

export default (request: NowRequest, response: NowResponse) => {
  const menus: Menu[] = [
    {
      fullPath: '/user',
      title: 'User',
      icon: 'user',
    },
    {
      fullPath: '/menu',
      title: 'Menu',
      icon: 'Menu',
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
  response.status(200).json(menus);
};
