const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  Recruit,
  Company,
  Application,
} = require('../models');
const {
  loggedIn,
} = require('../routes/status');
const router = express.Router();

// 멀터 설정
const storage = multer.diskStorage({
  destination(req, file, done) {
    done(null, 'uploads/');
  },
  filename(req, file, done) { // 원본 파일 이름 + _ + 시간 + 확장자
    const ext = path.extname(file.originalname);
    done(null, path.basename(file.originalname, ext) + '_' + Date.now() + ext);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
});

// 채용 지원 페이지
// 채용 지원
router.route('/:id')
  .get(loggedIn, async (req, res, next) => {
    try {
      const user = (req.user ? req.user : null); // 회원 정보
      const recruit = await Recruit.findOne({ // 채용 공고
        where: {
          id: req.params.id
        },
        include: {
          model: Company // 회사 정보
        },
      });
      res.render('apply', {
        recruit,
        user,
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  })
  .post(loggedIn, upload.single('resume'), async (req, res, next) => {
    try {
      const {
        name,
        email,
        phone,
        address
      } = req.body;
      await Application.create({
        name,
        email,
        phone,
        address,
        file: (req.file ? req.file.filename : ''),
        UserId: req.user.id,
        RecruitId: req.params.id,
      })
      return res.send("<script>alert('지원서가 제출되었습니다.');location.href='/';</script>");
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

module.exports = router;