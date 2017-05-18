'use strict'

const db = require('../../config/db')

const Example = db.define('example', {
	id: {
		type: db.Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	ejemplo: {
		type: db.Sequelize.STRING,
	}
}, {
	timestamps: false
})

module.exports = Example