const Sequelize = require('sequelize');

module.exports = class Application extends Sequelize.Model { // 지원서
  static init(sequelize) {
    return super.init({
      id: { // PK
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { // 이름
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: { // 이메일
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: { // 핸드폰 번호
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      address: { // 주소
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      file: { // 이력서 / 포트폴리오
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Application',
      tableName: 'applications',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
};