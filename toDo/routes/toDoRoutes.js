const express = require('express')
const router = express.Router()
const toDoController = require('../controllers/toDoController')

router.get('/todos', toDoController.listToDo)
router.post('/todos/createToDo', toDoController.createToDo)
router.get('/todos/getToDo/:id', toDoController.getToDo)
router.put('/todos/updateToDo/:id', toDoController.updateToDo)
router.delete('/todos/deleteToDo/:id', toDoController.deleteToDo)

module.exports = router