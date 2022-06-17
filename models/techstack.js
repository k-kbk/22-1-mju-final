const Sequelize = require('sequelize');

module.exports = class Techstack extends Sequelize.Model { // 기술 스택
  static init(sequelize) {
    return super.init({
      tag: { // 태그 이름
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Techstack',
      tableName: 'techstacks',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
};
