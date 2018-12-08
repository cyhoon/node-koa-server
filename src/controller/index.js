const models = require('../database/models');

const getUsers = async (ctx) => {
  const users = await models.User.findAll();
  ctx.body = users;
};

const getUser = async (ctx) => {
  const { id } = ctx.params;

  const users = await models.User.findOne({ where: { id } });
  ctx.body = users;
};

module.exports = {
  getUsers,
  getUser
};

