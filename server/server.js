'use strict'

const express = require('express')
const mongoose = require('mongoose')
const { json } = require('body-parser')
// Links to index.js
const routes = require('../server/routes/')

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
app.use(routes)

mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () =>
	// Listen to requests on the provided port and log when available
	app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
)	