'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userId: 'jeffchoi_A',
      name: '최영훈_A',
      engName: 'jeffchoi_A',
      createdAt: '2018-12-04',
      updatedAt: '2018-12-04'
    },{
      userId: 'jeffchoi_B',
      name: '최영훈_B',
      engName: 'jeffchoi_B',
      createdAt: '2018-12-05',
      updatedAt: '2018-12-05'
    },{
      userId: 'jeffchoi_C',
      name: '최영훈_C',
      engName: 'jeffchoi_C',
      createdAt: '2018-12-06',
      updatedAt: '2018-12-06'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

