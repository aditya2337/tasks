require('../passport');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var passport = require('passport');
const uuidv1 = require('uuid/v1');

var fs = require('fs'),
  configPath = './config.json';
var config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

router.use(passport.initialize());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/not', function(req, res, next) {
  res.json({ err: 'na bhao' });
});

router.post('/send-mail', handleSendInvite);

// OAUTH2
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/google/failure'
  })
);

function handleSendInvite(req, res) {
  const token = uuidv1();
  var text =
    'Please click on the link below to take the interview: \n\n' +
    config.host +
    '/interview/' +
    token;

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.user,
      pass: config.pass
    }
  });

  var mailOptions = {
    from: 'androiditya@gmail.com',
    to: req.body.email,
    subject: 'Iterview questions',
    text: text
  };

  if (req.body.email) {
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.json({ error: 'Mail could not be sent' });
      } else {
        console.log('Message sent: ' + info.response);
        res.json({ status: 'success', data: info.response });
      }
    });
  } else {
    res.json({ error: 'No valid email input' });
  }
}

module.exports = router;
