const express = require('express');
const nodemailer = require('nodemailer');

// 노드메일러
const mailSender = {
  sendGmail: function (param) {
    const transporter = nodemailer.createTransport({
      service: 'naver',
      port: 465,
      host: 'smtp.naver.com',
      auth: {
        user: process.env.MAIL_USER, // 네이버 계정
        pass: process.env.MAIL_PASS, // 네이버 비밀번호
      }
    });
    // 메일 옵션
    const mailOptions = {
      from: process.env.MAIL_USER, // 발신인
      to: param.toEmail, // 수신인
      subject: param.subject, // 메일 제목  
      text: param.text, // 메일 내용
    };
    // 메일 발송    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}

module.exports = mailSender;