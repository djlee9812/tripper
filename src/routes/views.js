const express = require('express');


const router = express.Router();

router.get('/', function(req, res, next) {
	res.sendFile('index.html', {root: 'src/views'});
});

router.get('/about', function(req, res, next) {
	res.sendFile('about.html', {root: 'src/views'});
});

router.get('/profile/:userId', function(req, res) {
	const userId = req.params.userId;
	res.sendFile('profile.html', {root: 'src/views'});
})

module.exports = router;
