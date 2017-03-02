const express = require('express');
const router = express.Router();

const Message = require('../models/message');

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

router.post('/', function (req, res, next) {
	var message = new Message({
		content: req.body.content
	});

	message.save(function(err, result) {
		if (err) {
			return res.status(500).json({
				title: 'An error occurred in the post route',
				error: err
			});
		}
		res.status(201).json({
			message: 'Message saved',
			obj: result
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

module.exports = router;