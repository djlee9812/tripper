const express = require("express");
const connect = require('connect-ensure-login');
const passport = require('../passport');


const User = require("../models/users.js");
const Trip = require("../models/trips.js");
const router = express.Router();

// import { OpenStreetMapProvider } from 'leaflet-geosearch';

// api endpoints
router.get('/whoami', function(req, res) {
	if(req.isAuthenticated()){
		User.findOne({_id: req.user._id}, (err, user) => {
			res.send(user)
		});
	}
	else{
		res.send({});
	}
});

// router.get('/search', function(req, res) {

// });


module.exports = router;
