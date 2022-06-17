'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [{
        id: 1,
        email: 'kkbk0077@gmail.com',
        password: '$2b$12$XSoyBoNDdDNmz9D4aY33LONHvuYdCozDnnKho9XyK22knQURyH4bW',
        name: '김보겸',
        provider: 'local',
        created_at: new Date('2022-05-30 11:15:07'),
        updated_at: new Date('2022-05-30 11:15:07'),
      }], {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};