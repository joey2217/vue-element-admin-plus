import { flatTree } from '@/utils';

test('Util flatTree', () => {
  const tree = [
    {
      id: 1,
      children: [{
        id: 2,
        children: [{
          id: 3,
        }],
      }],
    },
    {
      id: 4,
      children: [{
        id: 5,
      }],
    },
  ];
  const flatArr = flatTree(tree);
  expect(flatArr.length).toEqual(5);
  expect(flatArr.findIndex(i => i.id === 3)).not.toEqual(-1);
});
