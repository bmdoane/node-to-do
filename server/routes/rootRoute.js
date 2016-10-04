'use strict'

const { Router } = require('express')
const router = Router()
const todoList = require('../controllers/rootCtrl')

router.get('/api/todos', todoList.new)
router.post('/api/todos', todoList.create)

module.exports = router