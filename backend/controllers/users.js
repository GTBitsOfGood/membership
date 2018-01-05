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
		name: req.body.name,
		email: req.body.email,
		title: req.body.title,
		credit_hours: req.body.credit_hours,
		graduation_date: req.body.graduation_date ? new Date(req.body.graduation_date) : null,
		score: 0,
		github_id: req.body.github_id,
		github_username: req.body.github_username,
		github_access_token: req.body.github_access_token,
		github_avatar_url: req.body.github_avatar_url,
		github_profile_url: req.body.github_profile_url,
		github_public_repos: req.body.github_public_repos,
		github_followers: req.body.github_followers,
		role: req.body.role || 'applicant',
		websites: JSON.stringify(req.body.websites ? req.body.websites : []),
		free_response: JSON.stringify(req.body.free_response ? req.body.free_response : {})
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

		user.name = req.body.name ? req.body.name : user.name;
		user.email = req.body.email ? req.body.email : user.email;
		user.title = req.body.title ? req.body.title : user.title;
		user.credit_hours = req.body.credit_hours ? req.body.credit_hours : user.credit_hours;
		user.graduation_date = req.body.graduation_date ? new Date(req.body.graduation_date) : user.graduation_date;
		user.score = req.body.score ? req.body.score : user.score;
		user.role = req.body.role ? req.body.role : user.role;
		user.github_id = req.body.github_id ? req.body.github_id : user.github_id;
		user.github_username = req.body.github_username ? req.body.github_username : user.github_username;
		user.github_access_token = req.body.github_access_token ? req.body.github_access_token : user.github_access_token;
		user.github_avatar_url = req.body.github_avatar_url ? req.body.github_avatar_url : user.github_avatar_url;
		user.github_profile_url = req.body.github_profile_url ? req.body.github_profile_url : user.github_profile_url;
		user.github_public_repos = req.body.github_public_repos ? req.body.github_public_repos : user.github_public_repos;
		user.github_followers = req.body.github_followers ? req.body.github_followers : user.github_followers;
		user.free_response = req.body.free_response ? JSON.stringify(req.body.free_response) : user.free_response;

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