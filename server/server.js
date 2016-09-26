'use strict'

const express = require('express')

// Initialize
const app = express()

// Configure
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.static('client'))

// Listen to requests on the provided port and log when available
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))