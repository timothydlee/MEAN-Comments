const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/', function (req, res, next) {
	var user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: bcrypt.hashSync(req.body.password, 10),
		email: req.body.email
	});
	user.save(function(err, result) {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred in the user save route',
				error: err
			});
		}
		res.status(201).json({
			message: 'User created',
			obj: result
		});
	});
});

module.exports = router;
