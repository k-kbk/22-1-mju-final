const express = require('express');
const sequelize = require('sequelize');
const {
  Recruit,
  Company,
  Techstack
} = require('../models');
const router = express.Router();

// 메인 페이지
router.get('/', async (req, res, next) => {
  try {
    const user = (req.user ? req.user : null); // 회원 정보
    const tags = await Techstack.findAll({ // 기술스택 태그
      order: sequelize.fn('RAND'),
      limit: 4,
    });
    const recruits = await Recruit.findAll({ // 채용 공고 목록
      include: {
        model: Company, // 회사 정보
      },
      order: [
        ['createdAt', 'DESC']
      ],
    });
    res.render('index', {
      user,
      tags,
      recruits,
      keyword: '',
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;