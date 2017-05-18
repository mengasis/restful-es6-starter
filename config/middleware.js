'use strict'

const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const compression = require('compression')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const config = require('../config.json')

module.exports = function (app, express) {

	let environment = process.env.NODE_ENV || config.environment || 'development'

	if (environment == 'production') {
		app.use(compression())
	} else if (environment == 'development') {
		app.use(errorHandler())
	}

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({
		extended: true,
	}))
	app.use(methodOverride())
	app.use(morgan('combined'))
}