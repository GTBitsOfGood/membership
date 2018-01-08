module.exports.requireLoggedIn = (req, res, next) => {
  if (!req.user) return sendUnauthorized(res);
  return next();
};

module.exports.adminOrSelf = (req, res, next) => {
  if (!req.user) return sendUnauthorized(res);
  if (req.user.role === 'admin') return next();
  if (req.user.id === req.params.id) return next();

  return sendUnauthorized(res);
};

module.exports.requireAdmin = (req, res, next) => {
  if (!req.user) return sendUnauthorized(res);
  if (req.user.role !== 'admin') return sendUnauthorized(res);

  return next();
};

const sendUnauthorized = res => {
  return res.status(403).json({
    status: 'error',
    msg: 'Unauthorized'
  });
};
