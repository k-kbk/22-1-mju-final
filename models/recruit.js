const Sequelize = require('sequelize');

module.exports = class Recruit extends Sequelize.Model { // 채용 공고
  static init(sequelize) {
    return super.init({
      title: { // 제목
        type: Sequelize.STRING,
        allowNull: false,
      },
      career: { // 직무
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: { // 내용
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      requirement: { // 자격조건
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      plus: { // 우대사항
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Recruit',
      tableName: 'recruits',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};