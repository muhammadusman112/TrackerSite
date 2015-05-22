var Model = require('./db.js');
var bcrypt = require('bcrypt-nodejs');

var LocalStrategy = require('passport-local').Strategy;
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.name);
    });
    passport.deserializeUser(function(username, done) {
        new Model.User({
            name: username
        }).fetch().then(function(user) {
            done(null, user);
        });
    });
    passport.use('signin', new LocalStrategy({

        usernameField: 'name',
        passwordField: 'password'
    }, function(username, password, done) {
        new Model.User({
            name: username
        }).fetch().then(function(data) {
            var user = data;
            if (user === null) {
                return done(null, false, {
                    errorMessage: 'Invalid username or password'
                });
            } else {
                user = data.toJSON();
                if (!bcrypt.compareSync(password, user.password)) {
                    if (password != user.password) {
                        return done(null, false, {
                            errorMessage: 'Invalid username or password'
                        });
                    } else {
                        return done(null, user);
                    }

                }
            }
            return done(null, user);
        });
    }));

};