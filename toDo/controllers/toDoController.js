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
        await toDoModel.save()
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
        updates.forrEach((update) => (toDoItem[update] = req.body[update]))
        await toDoModel.save()
    } catch (error) {
        res.status(400).send({ message:error.message })
    }
}

exports.deleteToDo = async (req, res) => { 
    try {
        await req.toDoModel.deleteOne()
        res.json({ message: 'item deleted successfully'})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}