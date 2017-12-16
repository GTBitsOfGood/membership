const User = require('mongoose').model('User');

module.exports.index = (req, res, next) => {
	User.find({}, (err, users) => {
		if (err) {
			console.error(err);
			res.locals.error = err;
			return next();
		}

		res.locals.data = {
			users: users
		};
		return next();
	});
}

module.exports.get = (req, res, next) => {
	User.findById(req.params.id, (err, usr) => {
		if (err) {
			console.error(err);
			res.locals.error = err;
			return next();
		}

		res.locals.data = {
			user: usr
		};
		return next();
	});
}

module.exports.store = (req, res, next) => {
	User.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		title: req.body.title,
		credit_hours: req.body.credit_hours,
		graduation_date: req.body.graduation_date ? new Date(req.body.graduation_date) : null,
		score: 0,
		role: req.body.role || 'applicant'
	}, (err, usr) => {
		if (err) {
			console.error(err);
			res.locals.error = err;
			return next();
		}

		res.locals.data = {
			user: usr
		};
		return next();
	});
}

module.exports.update = (req, res, next) => {
	User.findById(req.params.id, (err, user) => {
		if (err) {
			console.error(err);
			res.locals.error = err;
			return next();
		}

		user.first_name = req.body.first_name ? req.body.first_name : user.first_name;
		user.last_name = req.body.last_name ? req.body.last_name : user.last_name;
		user.email = req.body.email ? req.body.email : user.email;
		user.title = req.body.title ? req.body.title : user.title;
		user.credit_hours = req.body.credit_hours ? req.body.credit_hours : user.credit_hours;
		user.graduation_date = req.body.graduation_date ? new Date(req.body.graduation_date) : user.graduation_date;
		user.score = req.body.score ? req.body.score : user.score;
		user.role = req.body.role ? req.body.role : user.role;

		user.save((err, updated) => {
			if (err) {
				console.error(err);
				res.locals.error = err;
				return next();
			}

			res.locals.data = {
				user: updated
			};
			return next();
		});
	});
}

module.exports.delete = (req, res, next) => {
	User.remove({
		_id: req.params.id
	}, (err, usr) => {
		if (err) {
			console.error(err);
			res.locals.error = err;
			return next();
		}
		res.locals.data = {
			deleted: true
		};
		return next();
	});
}