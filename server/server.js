'use strict'

const express = require('express')

// Initialize
const app = express()

// Configure
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.static('client'))

// Routing
app.get('/api/title', (req, res) =>
	res.json({ title: 'Things I need to do...' })
)

// Listen to requests on the provided port and log when available
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))