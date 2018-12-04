const models = require('../../models');

const getUsers = async (ctx) => {
  const users = await models.User.findAll();
  ctx.body = users;
};

const getUser = async (ctx) => {
  const { id } = ctx.params;

  const user = await models.User.findOne({ where: { id } });
  ctx.body = user;
};

module.exports = {
  getUsers,
  getUser
};
