const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const User = require('./user');
const Company = require('./company');
const Recruit = require('./recruit');
const Techstack = require('./techstack');
const Recruit_Techstack = require('./recruit_techstack');
const Application = require('./application');
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;

db.User = User;
db.Company = Company;
db.Recruit = Recruit;
db.Techstack = Techstack;
db.Recruit_Techstack = Recruit_Techstack;
db.Application = Application;

User.init(sequelize);
Company.init(sequelize);
Recruit.init(sequelize);
Techstack.init(sequelize);
Recruit_Techstack.init(sequelize);
Application.init(sequelize);

// 회사 : 채용 공고 = 1 : N 
Company.hasMany(Recruit, {
  foreignKey: 'company_id'
});
Recruit.belongsTo(Company, {
  foreignKey: 'company_id'
});

// 회원 : 채용 공고 = N : M 
User.belongsToMany(Recruit, {
  through: Application,
});
Recruit.belongsToMany(User, {
  through: Application,
});

// 채용 공고 : 기술 스택 = N : M 
Recruit.belongsToMany(Techstack, {
  through: Recruit_Techstack,
});
Techstack.belongsToMany(Recruit, {
  through: Recruit_Techstack,
});

module.exports = db;