'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userId: 'jeffchoi_A',
      name: '최영훈_A',
      engName: 'JeffChoi_A',
      gender: '남성',
      createdAt: '2018-12-03',
      updatedAt: '2018-12-03',
    },{
      userId: 'jeffchoi_B',
      name: '최영훈_B',
      engName: 'JeffChoi_B',
      gender: '남성',
      createdAt: '2018-12-04',
      updatedAt: '2018-12-04',
    },{
      userId: 'jeffchoi_C',
      name: '최영훈_C',
      engName: 'JeffChoi_C',
      gender: '남성',
      createdAt: '2018-12-05',
      updatedAt: '2018-12-05',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
