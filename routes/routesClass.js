var _ = require("underscore"),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    LdapStrategy = require('passport-ldapauth').Strategy,
    ConnectRoles = require('connect-roles'),
    LdapAuthz = require('passport-ldapauth');
var app = express();
var user = new ConnectRoles();
module.exports = function(app, passport) {
    user.use(function(req, action) {
        if (!req.isAuthenticated()) {
            return action === 'access home page';
        }
    });
    user.use(function(req) {
        if (req.user.username === 'admin') {
            return true;
        }
    });

    user.use('admin', function(req) {
        if (req.user.role === 'moderator') {
            return true;
        }
    });

    app.get('/', function(req, res) {
        var tagline = "Any code of your own that you have.";
        res.render('./index', {
            name: tagline
        });
    });
    app.get('/404', function(req, res) {
        res.render('404'); //,
    });

    app.get('/login', function(req, res) {
        res.render('login'); //,
    });

    app.post('/login', passport.authenticate('signin', {
        successRedirect: '/logout',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.post('/logout', function(req, res) {
        if (!req.isAuthenticated()) res.redirect('/login');
        else {
            req.session.destroy(function(err) {
                res.redirect('/login');
            });
        }

    });
    app.get('/logout', function(req, res) {
        if (!req.isAuthenticated()) {
            res.redirect('/404');
        } else {
            res.render('logout');
        }
    });

};

// app.get('/u1', user.is('admin'), function(req, res) {
//     res.render('u1'); //,
// });


// app.get('/u1',user.is('admin'),function(req, res) {
//     res.render('u1'); //,
// });

// app.get('/u2', user.is('moderator'), function(req, res) {
//     res.render('u2'); //,
// });