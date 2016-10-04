'use strict'

const { Router } = require('express')
const router = Router()

const Todo = require('../models/newTodo')

router.use(require('./rootRoute'))

module.exports = router