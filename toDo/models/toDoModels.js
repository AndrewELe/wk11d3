const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    title:{type:String, require:true},
    description: String,
    completed:{type:Boolean, default:false},
    created_at:{type:Date, default:Date.now()}
})

const ToDo = mongoose.model('ToDo', toDoSchema)


ToDo.schema.path('completed').validate(function (value) {
    if (typeof value !== 'boolean') {
        throw new Error('completed field must be a boolean')
    }
})

ToDo.schema.path('title').validate(function (value) {
    if (typeof value !== 'string') {
        throw new Error('title field must be a string')
    }
})

ToDo.schema.path.path('description').validate(function (value) {
    if (typeof value !== 'string') {
        throw new Error('description field must be a string')
    }
})

module.exports = ToDo