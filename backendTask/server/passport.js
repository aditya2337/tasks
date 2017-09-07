const passport = require('passport');
const User = require('./model/schema/userSchema');
const ObjectId = require('mongodb').ObjectId;
var GoogleStrategy = require('passport-google-oauth2').Strategy;

require('./model/db');

const GOOGLE_CLIENT_ID =
  '362722309961-ljfsg9m4voh429pesni03heq8qaaa9uu.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '83ZwUsCepHQvWEqL425P9G9z';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
      console.log(profile.emails[0].value);
      User.db.collection('users').findOne({
        email: profile.emails[0].value
      }, (err, user) => {
        if (err) return done(null, false, { message: err });
        if (user) {
          return done(null, user);
        }

        // if there is no user with that email
        // create the user
        var newUser = new User();

        // set the user's local credentials
        newUser.email = profile.emails[0].value;
        newUser.oauth_provider = 'twitter';
        newUser.oauth_id = profile.username;

        // save the user
        newUser.save(function(err) {
          if (err) {
            throw err;
          }
          return done(null, newUser);
        });
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
