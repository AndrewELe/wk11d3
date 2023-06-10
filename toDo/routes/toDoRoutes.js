const express = require('express')
const router = express.Router()
const toDoController = require('../controllers/toDoController')

router.get('/', toDoController.listToDo)
router.post('/', toDoController.createToDo)
router.get('/', toDoController.getToDo)
router.put('/', toDoController.updateToDo)
router.delete('/', toDoController.deleteToDo)

module.exports = router