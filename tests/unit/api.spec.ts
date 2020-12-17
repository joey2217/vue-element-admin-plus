import { userList } from '../../api/users';

test('Api userList', () => {
  const num = 10;
  const users = userList(10);
  expect(users.length).toEqual(num);
});

const getUserList = (page = 1, size = 10) => {
  const total = 65;
  let num = size;
  const max = Math.ceil(total / size);
  if (page === max) {
    num = total % size;
  } else if (page > max) {
    num = 0;
  }
  const result = {
    num,
    max,
    total,
    page,
    size,
    list: userList(num),
  };
  return result;
};

test('getUserList', () => {
  const data = getUserList();
  expect(data.list.length).toBeGreaterThan(0);
});
