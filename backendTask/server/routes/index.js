var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var fs = require('fs'),
  configPath = './config.json';
var config = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
console.log(config);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send-mail', handleSayHello);

function handleSayHello(req, res) {
  var text = 'Hello world from \n\n' + req.body.name;
  // Not the movie transporter!
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.user, // Your email id
      pass: config.pass // Your password
    }
  });

  var mailOptions = {
    from: 'androiditya@gmail.com',
    to: req.body.email,
    subject: 'Email Example',
    text: text
  }; // sender address // list of receivers // Subject line //, // plaintext body
  // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead

  if (req.body.email) {
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        res.json({ error: 'Mail could not be sent' });
      } else {
        console.log('Message sent: ' + info.response);
        res.json({ data: info.response });
      }
    });
  } else {
    res.json({ error: 'No valid email input' });
  }
}

module.exports = router;
