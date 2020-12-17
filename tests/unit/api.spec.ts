import { userList } from '../../api/users';

test('Api userList', () => {
  const num = 10;
  const users = userList(10);
  console.log(users);
  expect(users.length).toEqual(num);
});
