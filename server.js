
var express = require('express');
var app = express();
var path    = require("path");
var passport = require('passport');
var flash    = require('connect-flash');
var Bookshelf = require('bookshelf');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
 
var   LocalStrategy = require('passport-local').Strategy;
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname + '/views'));
app.use(express.static(__dirname + '/views'));
//setup cookies , logs and html forms handling
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
//intilize passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
///routing start
require('./routes/routesClass.js')(app, passport); 
require('./config/modelClass')(passport);
/////////////////routing end
var server = app.listen(3000, function () {
});