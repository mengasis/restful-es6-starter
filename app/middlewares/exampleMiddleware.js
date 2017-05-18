'use strict'

const middleware = {

	checkAnything: function (req, res, next) {

		if ('Hola' === req.body.hola) {
			next()
		} else {
			res.json({
				error: 'Don\'t pass, middleware is here.'
			})
		}
	},

	checkAnythingTwo: function (req, res, next) {

		if ('User' === req.body.user) {
			next()
		} else {
			res.json({
				error: 'Don\'t pass, middleware two is here.'
			})
		}
	}
}

module.exports = middleware