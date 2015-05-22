var Model = require('../config/db.js');
var bcrypt = require('bcrypt-nodejs');
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
require('../routes/routesClass.js')(app, passport); 
//require('../config/modelClass')(passport);
app.use(passport.initialize());
app.use(passport.session());

// sign in
// GET
var signIn = function(req, res, next) {
 console.log(req);

 new Model.User({
            name: req.name,
            password: req.password
        }).fetch().then(function(data) {
        	console.log(Model.User.name);
            var user = data;
            if (user === null) {
               console.log("invalid")
            } else {
                user = data.toJSON();
                if (!bcrypt.compareSync(password, user.password)) {
                    if (password != user.password) {
                        return done(null, false, {
                            errorMessage: 'Invalid username or password'
                                                    });
                    } else {
                        res.send(true);
                    }

                }
            }
           
        });


	//	passport.authenticate(req);
    // if (req.isAuthenticated()) 
     	{
     		//return next();
     		//console.log(req.isAuthenticated());
     		//res.send('done')
     		    	}

//  else{
// // res.send(false);

//  }
// next();
};


// // sign in
// // POST
// var signInPost = function(req, res, next) {
//     passport.authenticate('local', {
//         successRedirect: '/index',
//         failureRedirect: '/tracker'
//     }, function(err, user, info) {
//         if (err) {
//             return res.render('tracker', {
//                 title: 'Sign In',
//                 errorMessage: err.message
//             });
//         }

//         if (!user) {
//             return res.render('tracker', {
//                 title: 'Sign In',
//                 errorMessage: info.message
//             });
//         }
//         return req.logIn(user, function(err) {
//             if (err) {
//                 return res.render('tracker', {
//                     title: 'Sign In',
//                     errorMessage: err.message
//                 });
//             } else {
//                 return res.redirect('/');
//             }
//         });
//     })(req, res, next);
// };

// // sign up
// // GET
// var signUp = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         res.redirect('/');
//     } else {
//         res.render('signup', {
//             title: 'Sign Up'
//         });
//     }
// };

// // sign up
// // POST
// var signUpPost = function(req, res, next) {
//     var user = req.body;
//     var usernamePromise = null;
//     usernamePromise = new Model.User({
//         username: user.username
//     }).fetch();

//     return usernamePromise.then(function(model) {
//         if (model) {
//             res.render('signup', {
//                 title: 'signup',
//                 errorMessage: 'username already exists'
//             });
//         } else {
//             //****************************************************//
//             // MORE VALIDATION GOES HERE(E.G. PASSWORD VALIDATION)
//             //****************************************************//
//             var password = user.password;
//             var hash = bcrypt.hashSync(password);

//             var signUpUser = new Model.User({
//                 username: user.username,
//                 password: hash
//             });

//             signUpUser.save().then(function(model) {
//                 // sign in the newly registered user
//                 signInPost(req, res, next);
//             });
//         }
//     });
// };

// // sign out
// var signOut = function(req, res) {
//     if (!req.isAuthenticated()) {
//         notFound404(req, res);
//     } else {
//         req.session.destroy(function(err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.redirect('/');
//             }
//         });
//     }
// };

// // 404 not found
// var notFound404 = function(req, res, next) {
//     res.status(404);
//     res.render('404', {
//         title: '404 Not Found'
//     });
// };

// export functions
/**************************************/
// // index
// module.exports.index = index;

// // sigin in
// // GET
 module.exports.signIn = signIn;
// // POST
// module.exports.signInPost = signInPost;

// // sign up
// // GET
// module.exports.signUp = signUp;
// // POST
// module.exports.signUpPost = signUpPost;

// // sign out
// module.exports.signOut = signOut;

// // 404 not found
// module.exports.notFound404 = notFound404;