'use strict'

require('./utils/autoload')()
const config = require('./config.json')

const express = require('express')
const http = require('http')

const PORT = process.env.PORT || config.port || 3000

const Router = autoload('app/Router')
const app = express()

const server = http.createServer(app)

/* MIDDLEWARE */
require('./config/middleware')(app, express)

/* ROUTES */
Router.forEach(route => {
	app.use(route.path, route.middleware, route.handler)
})

/* ERRORS */
app.use(function (req, res) {
	res.status(404)

	res.json({
		error: 'Not found'
	})
})

app.use(function (err, req, res) {
	console.log(err.name)
	
	if (err.name === 'UnauthorizedError') {

		res.status(401).json({
			error: 'Please send a valid Token...'
		})
	}
})

app.use(function (err, req, res) {
	res.status(err.status || 500)

	res.json({
		error: err.message
	})
})

/* START SERVER */
server.listen(PORT)
console.log('Server ' + config.name + ' is running in process ' + process.pid + ' started on 127.0.0.1:' + PORT + '\n')