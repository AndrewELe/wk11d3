const express = require('express')
const router = express.Router()
const toDoController = require('../controllers/toDoController')

router.get('/', toDoController.listToDo)
router.post('/', toDoController.createToDo)
router.get('/:id', toDoController.getToDo)
router.put('/:id', toDoController.updateToDo)
router.delete('/:id', toDoController.deleteToDo)

module.exports = router