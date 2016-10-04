'use strict'

const Todo = require('../models/newTodo')

module.exports.new = (req, res, err) =>
	Todo
		.find()
		.then(todos => res.json({todos}))
		.catch(err)

module.exports.create = (req, res, err) => {
	const todo = req.body
	Todo
		.create(todo)
		.then(todo => res.json(todo))
		.catch(err)
}
