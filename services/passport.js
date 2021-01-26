const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');
// pull a model out of mongoose by using one argument

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
            console.log("You already have an account");
            done(null, existingUser);
        } else {
            new User({ googleId: profile.id })
                .save()
                .then(user => done(null, user))
        }
    })

}

))

// done takes two arguments
// - err - what to do in case of an error. In the 'if' statement, if something goes wrong it will move on to 'else'.