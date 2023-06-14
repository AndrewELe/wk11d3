const toDoModel = require('../models/toDoModels');

exports.listToDo = async (req,res) => {
    try {
        const toDoList = await toDoModel.find({})
        res.json(toDoList)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

exports.createToDo = async (req, res) => {
    try {
        
        const createToDo = new toDoModel(req.body)
        await createToDo.save()
        res.send(createToDo);
 
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

exports.getToDo = async (req, res) => { 
    try {
        const toDoItem = await toDoModel.findOne({ _id:req.params.id})
        res.json(toDoItem)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

exports.updateToDo = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const toDoItem = await toDoModel.findOne({ _id: req.params.id })
        updates.forEach(update => toDoItem[update] = req.body[update])
        await toDoItem.save()
        res.json({ message: 'to do item has been updated' })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

exports.deleteToDo = async (req, res) => { 
    try {
        const todoItem = await toDoModel.findOne({ _id:req.params.id})
        const result = await todoItem.deleteOne()
        if (result.deleteCount === 1) {
            console.log('sucess deleted')
        }
        res.json({ message: 'item deleted successfully'})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}