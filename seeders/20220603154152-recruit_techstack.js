'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'recruits_techstacks',
      [{
          recruit_id: 3,
          techstack_id: 1,
        },
        {
          recruit_id: 8,
          techstack_id: 1,
        },
        {
          recruit_id: 1,
          techstack_id: 1,
        },
        {
          recruit_id: 1,
          techstack_id: 2,
        },
        {
          recruit_id: 1,
          techstack_id: 8,
        },
        {
          recruit_id: 1,
          techstack_id: 11,
        },
        {
          recruit_id: 2,
          techstack_id: 10,
        },
        {
          recruit_id: 4,
          techstack_id: 8,
        },
        {
          recruit_id: 4,
          techstack_id: 9,
        },
        {
          recruit_id: 4,
          techstack_id: 12,
        },
        {
          recruit_id: 5,
          techstack_id: 10,
        },
        {
          recruit_id: 5,
          techstack_id: 9,
        },
        {
          recruit_id: 6,
          techstack_id: 6,
        },
        {
          recruit_id: 6,
          techstack_id: 5,
        },
        {
          recruit_id: 6,
          techstack_id: 7,
        },
        {
          recruit_id: 7,
          techstack_id: 4,
        },
        {
          recruit_id: 7,
          techstack_id: 2,
        },
        {
          recruit_id: 8,
          techstack_id: 3,
        },
        {
          recruit_id: 9,
          techstack_id: 10,
        },
        {
          recruit_id: 9,
          techstack_id: 13,
        },
        {
          recruit_id: 10,
          techstack_id: 2,
        },
        {
          recruit_id: 10,
          techstack_id: 4,
        },
        {
          recruit_id: 10,
          techstack_id: 9,
        },
        {
          recruit_id: 10,
          techstack_id: 14,
        }
      ], {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};