'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "companies",
      [{
          id: 1,
          login_id: 'bucketplace',
          password: '$2b$12$XSoyBoNDdDNmz9D4aY33LONHvuYdCozDnnKho9XyK22knQURyH4bW',
          logo: 'https://grepp-programmers.s3.amazonaws.com/production/company/logo/281/%EB%A1%9C%EA%B3%A0.png',
          name: '오늘의집',
          address: '서울특별시 서초구 서초대로74길 4, 25,27층(서초동, 삼성생명서초타워)',
          homepage: 'https://www.bucketplace.co.kr/',
          created_at: new Date('2022-05-30 11:15:07'),
          updated_at: new Date('2022-05-30 11:15:07'),
        },
        {
          id: 2,
          login_id: 'honestfund',
          password: '$2b$12$XSoyBoNDdDNmz9D4aY33LONHvuYdCozDnnKho9XyK22knQURyH4bW',
          logo: 'https://grepp-programmers.s3.amazonaws.com/production/company/logo/4470/HF_rm_logo_honestblue.png',
          name: '어니스트펀드',
          address: '서울특별시 영등포구 여의대로 24, 전국경제인연합회회관 21층',
          homepage: 'https://www.honestfund.kr/',
          created_at: new Date('2022-05-30 11:15:55'),
          updated_at: new Date('2022-05-30 11:15:55'),
        },
        {
          id: 3,
          login_id: 'daishin',
          password: '$2b$12$XSoyBoNDdDNmz9D4aY33LONHvuYdCozDnnKho9XyK22knQURyH4bW',
          logo: 'https://grepp-programmers.s3.amazonaws.com/production/company/logo/4712/CI_2.png',
          name: '대신저축은행',
          address: '서울특별시 중구 삼일대로 343, (저동1가)',
          homepage: 'https://bank.daishin.com/',
          created_at: new Date('2022-05-30 11:15:57'),
          updated_at: new Date('2022-05-30 11:15:57'),
        },
        {
          id: 4,
          login_id: 'geekble',
          password: '$2b$12$XSoyBoNDdDNmz9D4aY33LONHvuYdCozDnnKho9XyK22knQURyH4bW',
          logo: 'https://grepp-programmers.s3.amazonaws.com/production/company/logo/8000/%EA%B8%B1%EB%B8%94_%EB%A1%9C%EA%B3%A0.png',
          name: '긱블',
          address: '서울특별시 성동구 성수이로7가길 8, (성수동2가)',
          homepage: 'https://www.geekble.co/',
          created_at: new Date('2022-05-30 11:15:58'),
          updated_at: new Date('2022-05-30 11:15:58'),
        },
        {
          id: 5,
          login_id: 'toss',
          password: '$2b$12$XSoyBoNDdDNmz9D4aY33LONHvuYdCozDnnKho9XyK22knQURyH4bW',
          logo: 'https://grepp-programmers.s3.amazonaws.com/production/company/logo/2767/logo-only-icon.png',
          name: '비바리퍼블리카',
          address: '서울특별시 강남구 테헤란로 142, (역삼동)',
          homepage: 'https://toss.im/career',
          created_at: new Date('2022-05-30 11:17:00'),
          updated_at: new Date('2022-05-30 11:17:00'),
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