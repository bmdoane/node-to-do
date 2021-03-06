'use strict'

const express = require('express')
const mongoose = require('mongoose')
// Destructuring json from body-parser object
const { json } = require('body-parser')

// Initialize
const app = express()

// Configure
// String after localhost should match collection
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/todos'
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.static('client'))
app.use(json())

// Routing
app.get('/api/title', (req, res) =>
	res.json({ title: 'Things I need to do...' })
)

const ToDo = mongoose.model('todo', {
	task: 'String',
	dueDate: 'String',
	assignedTo: 'String',
})

app.get('/api/todos', (req, res, err) =>
	ToDo
		.find()
		.then(todos => res.json({ todos }))
		.catch(err)
)

app.post('/api/todos', (req, res, err) => {
	const todo = req.body
	ToDo
		.create(todo)
		.then(todo => res.json(todo))
		.catch(err)
})

mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () =>
	// Listen to requests on the provided port and log when available
	app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
)	