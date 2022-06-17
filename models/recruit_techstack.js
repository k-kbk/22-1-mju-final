const Sequelize = require('sequelize');

module.exports = class Recruit_Techstack extends Sequelize.Model { // 채용 공고 - 기술 스택
  static init(sequelize) {
    return super.init({
    }, {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'Recruit_Techstack',
      tableName: 'recruits_techstacks',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
};