require('../passport');
var express = require('express');
var router = express.Router();
var Invite = require('../model/schema/inviteSchema');
var User = require('../model/schema/userSchema');
var Questions = require('../model/schema/questionsSchema');
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
  res.json({ err: 'Failed' });
});

router.get('/auth/google/failure', (req, res) =>
  res.redirect(`${config.host}/auth-failed`)
);

router.get('/questions', (req, res) => {
  Questions.find({}, (err, questions) => {
    if (err) return res.json({ error: err });
    if (!questions) return res.json({ success: false });
    res.json({ success: true, questions });
  });
});

router.put('/submit', (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.email },
    { score: req.body.score },
    (err, user) => {
      if (err) return res.json({ error: err });
      if (!user) return res.json({ success: false });

      res.json({ success: true, user });
    }
  );
});

router.get('/check-validity', (req, res) => {
  User.findOne({ token: req.query.token }, (err, user) => {
    if (err) return res.json({ error: err });
    if (!user) return res.json({ success: false });
    return res.json({ success: true, user });
  });
});

router.post('/send-mail', handleSendInvite);

// OAUTH2
router.get('/auth/google', function(req, res, next) {
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    state: req.query.token
  })(req, res, next);
});

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google/failure'
  }),
  (req, res) => {
    console.log(req.user);
    res.redirect(`${config.host}/interview/${req.user.token}`);
  }
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
        Invite.db.collection('invites').findOne({
          email: req.body.email
        }, (err, invite) => {
          if (err) return done(null, false, { message: err });
          if (invite) {
            return res.json({ error: 'Email already sent' });
          }

          var newInvite = new Invite();

          newInvite.email = req.body.email;
          newInvite.token = token;

          newInvite.save(function(err) {
            if (err) {
              throw err;
            }
          });
          console.log('Message sent: ' + info.response);
          res.json({ status: 'success', data: info.response });
        });
      }
    });
  } else {
    res.json({ error: 'No valid email input' });
  }
}

module.exports = router;
