const express = require('express');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const {
  Recruit,
  Company,
  Techstack,
} = require('../models');
const router = express.Router();

// 채용 공고 검색
router.get('/search', async (req, res, next) => {
  try {
    const user = (req.user ? req.user : null); // 회원 정보
    const tags = await Techstack.findAll({ // 기술스택 태그
      order: sequelize.fn('RAND'),
      limit: 4,
    });
    const recruits = await Recruit.findAll({ // 채용 공고 목록
      where: {
        title: {
          [Op.like]: '%' + req.query.search + '%' // 유사 검색
        }
      },
      include: {
        model: Company // 회사 정보
      },
      order: [
        ['createdAt', 'DESC']
      ],
    });
    res.render('index', {
      tags,
      user,
      recruits,
      keyword: req.query.search,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

// 기술 스택으로 채용 공고 검색
router.get('/tech/:tag', async (req, res, next) => {
  try {
    const user = (req.user ? req.user : null); // 회원 정보
    const tags = await Techstack.findAll({ // 기술스택 태그
      order: sequelize.fn('RAND'),
      limit: 4,
    });
    const recruits = await Recruit.findAll({ // 채용 공고 목록
      include: [{
        model: Company, // 회사 정보
      }, {
        model: Techstack,
        where: {
          tag: req.params.tag,
        }
      }]
    });
    res.render('index', {
      tags,
      user,
      recruits,
      keyword: '',
      tag: req.params.tag,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

// 채용 공고 상세 페이지
router.get('/:id', async (req, res, next) => {
  try {
    const user = (req.user ? req.user.id : null); // 회원 정보
    const recruit = await Recruit.findOne({ // 채용 공고
      where: {
        id: req.params.id
      },
      include: [{
        model: Company // 회사 정보
      }, {
        model: Techstack // 기술스택
      }],
    });
    res.render('page', {
      recruit: recruit,
      user: user
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;