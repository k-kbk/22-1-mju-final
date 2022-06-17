'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'techstacks',
      [{
          id: 1,
          tag: 'Kotlin',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 2,
          tag: 'Java',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 3,
          tag: 'Swift',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 4,
          tag: 'Spring',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 5,
          tag: 'Django',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 6,
          tag: 'NodeJs',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 7,
          tag: 'Ruby on Rails',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 8,
          tag: 'Python',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 9,
          tag: 'JavaScript',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 10,
          tag: 'React',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 11,
          tag: 'Ruby',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 12,
          tag: 'Go',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 13,
          tag: 'TypeScript',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 14,
          tag: 'MySQL',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
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