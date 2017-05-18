'use strict'

const JWTServices = autoload('./app/services/JWTService')

const controller = {

	createToken: function (req, res) {

		let token = JWTServices.createToken()

		res.send({
			'token': token
		})
	}
}

module.exports = controller