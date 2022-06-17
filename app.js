const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
dotenv.config();
const {
  sequelize
} = require('./models');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const recruitRouter = require('./routes/recruit');
const applyRouter = require('./routes/apply')
const passportConfig = require('./passport');
const app = express();

// 설정
app.set('port', process.env.PORT || 7777);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
sequelize
  .sync({
    force: false
  })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });
passportConfig();

// 미들웨어
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// 라우터
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/recruit', recruitRouter);
app.use('/apply', applyRouter);

// 404
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

// 에러
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.send('error');
});

// 서버 실행
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});