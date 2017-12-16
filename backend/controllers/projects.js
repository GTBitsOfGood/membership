const Project = require('mongoose').model('Project');

module.exports.index = (req, res, next) => {
	Project.find({}, (err, projects) => {
		if (err) {
			console.error(err);
			res.locals.errors = err;
			return next();
		}

		res.locals.data = {
			projects: projects
		};
		return next();
	});
}

module.exports.get = (req, res, next) => {
	Project.findById(req.params.id, (err, project) => {
		if (err) {
			console.error(err);
			res.locals.errors = err;
			return next();
		}

		res.locals.data = {
			project: project
		};
		return next();
	});
}

module.exports.store = (req, res, next) => {
	Project.create({
		name: req.body.name,
		organization: req.body.organization,
		contact: {
			name: req.body.contact_name,
			email: req.body.contact_email,
			phone: req.body.contact_phone
		},
		project_manager: req.body.project_manager
	}, (err, project) => {
		if (err) {
			console.error(err);
			res.locals.errors = err;
			return next();
		}

		res.locals.data = {
			project: project
		};
		return next();
	});
}

module.exports.delete = (req, res, next) => {
	Project.remove({
		_id: req.params.id
	}, (err, project) => {
		if (err) {
			console.error(err);
			res.locals.errors = err;
			return next();
		}

		res.locals.data = {
			deleted: true
		};
		return next();
	});
}

module.exports.members = (req, res, next) => {
	Project.findById(req.params.id, (err, project) => {
		if (err) {
			console.error(err);
			res.locals.errors = err;
			return next();
		}
		
		res.locals.data = {
			users: project.project_members
		}
		return next();
	});
}

module.exports.add_member = (req, res, next) => {

}

module.exports.remove_member = (req, res, next) => {

}