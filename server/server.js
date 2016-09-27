'use strict'

const express = require('express')

// Initialize
const app = express()

// Configure
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.static('client'))

// Routing
app.get('/api/todo', (req, res) =>
	res.json({ todo: 'Pick up steaks' })
)

// Listen to requests on the provided port and log when available
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))