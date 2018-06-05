const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require("path");
const favicon = require('serve-favicon');

require('dotenv').config();

//local dependencies
const db = require("./db");
const views = require('./routes/views');
const api = require("./routes/api.js");
const passport = require('./passport');

const app = express();

// set POST request body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: 'false',
  saveUninitialized: 'true'
}));

// hook up passport
app.use(passport.initialize());
app.use(passport.session());

// authentication routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('back');
  });

app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

// set routes
app.use('/', views);
app.use("/api", api);
app.use('/static', express.static('./public'));

// 404 route
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  res.sendFile('404.html', {root:'src/views'});
});

// route error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    status: err.status,
    message: err.message,
  });
});

const port = process.env.PORT || 3000; // config variable
const server = http.Server(app);
server.listen(port, function() {
  console.log('Server running on port: ' + port);
});