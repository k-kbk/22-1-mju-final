const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model { // 회원
  static init(sequelize) {
    return super.init({
      email: { // 이메일
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: { // 비밀번호
        type: Sequelize.STRING,
        allowNull: true,
      },
      name: { // 이름
        type: Sequelize.STRING,
        allowNull: true,
      },
      provider: { // 회원 유형 - local or kakao
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'local',
      },
      sns_id: { // sns id
        type: Sequelize.STRING,
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
