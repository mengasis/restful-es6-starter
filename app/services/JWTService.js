'use strict'

const jwt = require('jsonwebtoken')
const config = require('../../config.json')

const secret = config.secret

const service = {

	createToken: function () {

		let token = jwt.sign({
			'text': 'A encryption text, hidden in the token.'
		}, secret, {
			expiresInMinutes: 1440
		})

		return token
	}
}

module.exports = service