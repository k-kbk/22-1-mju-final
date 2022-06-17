const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {
  User,
  Recruit,
  Company,
} = require('../models');
const {
  loggedIn,
  notLoggedIn,
} = require('../routes/status');
const mailSender = require('../nodemailer/mail');
const router = express.Router();

// 회원가입 페이지
// 회원가입
router.route('/signup')
  .get(notLoggedIn, (req, res) => {
    res.render('signup', {
      user: null
    });
  })
  .post(notLoggedIn, async (req, res, next) => {
    const {
      email,
      password,
      name,
    } = req.body;
    try {
      const hash = await bcrypt.hash(password, 12); // 해싱
      await User.create({
        email,
        password: hash,
        name,
      });
      return res.send("<script>alert('회원가입이 완료되었습니다.');location.href='/user/login';</script>");
    } catch (error) {
      console.error(error);
      return next(error);
    }
  })

// 로그인 페이지
// 로컬 로그인
router.route('/login')
  .get(notLoggedIn, (req, res) => {
    res.render('login', {
      user: null
    });
  })
  .post(notLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!user) {
        return res.send("<script>alert('이메일 또는 비밀번호가 일치하지 않습니다.');location.href='/user/login';</script>");
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        return res.redirect('/');
      });
    })(req, res, next);
  });

// 카카오 로그인
router.get('/login/kakao', notLoggedIn, passport.authenticate('kakao'));
router.get('/login/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/user/login',
}), (req, res) => {
  res.redirect('/');
});

// 로그아웃
router.get('/logout', loggedIn, (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.redirect('/');
  });
});

// 비밀번호 찾기
router.get('/find', async (req, res) => {
  const email = req.query.email;
  try {
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (user) {
      const newPassword = Math.random().toString(36).slice(2); // 임시 비밀번호
      const info = {
        toEmail: email,
        subject: '[WEB] 임시 비밀번호 발급',
        text: `임시 비밀번호는 ${newPassword}입니다.`,
      }
      const hash = await bcrypt.hash(newPassword, 12); // 해싱
      await User.update({
        password: hash,
      }, {
        where: {
          email
        }
      });
      mailSender.sendGmail(info); // 메일 발송
      return res.send("<script>alert('임시 비밀번호가 발급되었습니다.');location.href='/user/login';</script>");
    } else {
      return res.send("<script>alert('사용자 정보가 존재하지 않습니다.');location.href='/user/login';</script>");
    }
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

// 내 정보
router.get('/my', loggedIn, async (req, res, next) => {
  try {
    const recruits = await Recruit.findAll({ // 내가 지원한 채용 목록
      include: [{
        model: Company,
      }, {
        model: User,
        where: {
          id: req.user.id,
        }
      }],
      order: [
        ['createdAt', 'DESC']
      ],
    });
    res.render('my', {
      user: req.user,
      recruits,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

// 내 정보 수정 페이지
// 내 정보 수정
router.route('/edit')
  .get(loggedIn, (req, res) => {
    res.render('edit', {
      user: req.user,
    });
  })
  .put(loggedIn, async (req, res, next) => {
    const {
      email,
      password,
      name,
    } = req.body;
    try {
      if (password) {
        const hash = await bcrypt.hash(password, 12); // 해싱
        await User.update({
          email,
          password: hash,
          name,
        }, {
          where: {
            id: req.user.id
          },
        });
      } else {
        await User.update({
          email,
          name,
        }, {
          where: {
            id: req.user.id
          },
        });
      }
      return res.send("<script>alert('내 정보 수정이 완료되었습니다.');location.href='/';</script>");
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

// 회원탈퇴
router.delete('/delete', loggedIn, async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.user.id
      },
    })
    return res.send("<script>alert('회원탈퇴가 완료되었습니다.');location.href='/';</script>");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;