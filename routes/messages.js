const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Message = require('../models/message');
const User = require('../models/user');

router.get('/', function(req, res, next) {
	Message.find()
		.exec(function(err, messages) {
			if (err) {
				return res.status(500).json({
					title: 'An error occurred in the get route',
					error: err
				});
			}
			res.status(200).json({
				message: 'Messages retrieved',
				obj: messages
			});
		});
});

//Since we want only authenticated users to be able to post/edit/delete messages, we'll do that here, after the main get route which any person can see
router.use('/', function(req, res, next) {
	jwt.verify(req.query.token, 'secret', function(err, decoded) {
		if (err) {
			return res.status(401).json({
				title: 'Not Authenticated',
				error: err
			});
		}
		next();
	});
});

router.post('/', function(req, res, next) {
	var decoded = jwt.decode(req.query.token);

	User.findById(decoded.user._id, function(err, user) {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred looking for userId',
				error: err
			});
		}
		var message = new Message({
			content: req.body.content,
			user: user
		});
		message.save(function(err, result) {
			if (err) {
				return res.status(500).json({
					title: 'An error occurred in the post route',
					error: err
				});
			}
			user.messages.push(result);
			user.save();
			res.status(201).json({
				message: 'Message saved',
				obj: result
			});
		});
	});
});

router.patch('/:id', function(req, res, next) {
	Message.findById(req.params.id, function(err, message) {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred in the patch route',
				error: err
			});
		}
		if (!message) {
			return res.status(500).json({
				title: 'Message Not Found!',
				error: {message: 'Message not found'}
			});
		}
		message.content = req.body.content;
		message.save(function(err, result) {
			if (err) {
				return res.status(500).json({
					title: 'An error occurred in the post route',
					error: err
				});
			}
			res.status(200).json({
				message: 'Updated message',
				obj: result
			});
		})
	});
});

router.delete('/:id', function(req, res, next) {
	Message.findById(req.params.id, function(err, message) {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred in the delete route',
				error: err
			});
		}
		if (!message) {
			return res.status(500).json({
				title: 'Message Not Found!',
				error: {message: 'Message not found'}
			});
		}
		message.remove(function(err, result) {
			if (err) {
				return res.status(500).json({
					title: 'An error occurred in the post route',
					error: err
				});
			}
			res.status(200).json({
				message: 'Deleted message',
				obj: result
			});
		})
	});
});

module.exports = router;