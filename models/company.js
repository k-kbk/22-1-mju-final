const Sequelize = require('sequelize');

module.exports = class Company extends Sequelize.Model { // 회사
  static init(sequelize) {
    return super.init({
      login_id: { // 아이디
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: { // 비밀번호
        type: Sequelize.STRING,
        allowNull: false,
      },
      logo: { // 회사 로고
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: { // 회사 이름
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: { // 회사 주소
        type: Sequelize.STRING,
        allowNull: false,
      },
      homepage: { // 회사 홈페이지
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Company',
      tableName: 'companies',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};