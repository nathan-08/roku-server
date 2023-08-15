module.exports = function (req,res,next) {
	if (req.query.auth != process.env.AUTH_TOKEN) {
		let err = new Error('Not authorized');
		err.status = 401;
		return next(err);
	}
	return next();
}
