const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
const User = require('../models/user');

module.exports = () => {
  passport.use(new kakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/user/login/kakao/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const exUser = await User.findOne({
        where: {
          sns_id: profile.id,
          provider: 'kakao'
        },
      });
      if (exUser) { // 기존 회원 
        done(null, exUser);
      } else { // 첫 카카오 로그인
        const newUser = await User.create({
          sns_id: profile.id,
          provider: 'kakao',
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};