const userList = [
  { id: '1', name: '최영훈A', engName: 'JeffChoi' },
  { id: '2', name: '최영훈B', engName: 'JeffChoi' },
  { id: '3', name: '최영훈C', engName: 'JeffChoi' },
];

const getUsers = (ctx) => {
  ctx.body = userList;
};

const getUser = (ctx) => {
  const { id } = ctx.params;

  ctx.body = userList.filter((user) => user.id === id);
};

module.exports = {
  getUsers,
  getUser
};
