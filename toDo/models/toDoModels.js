const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    title:{type:String, required:[true, 'Use a title']}, // required: true is an inbuilt mongo validator
    description: {type:String, required: [true,'You must include a description']}, 
    completed:{type:Boolean, default:false, required: [true, 'You must indicate completion of status true or false']},
    created_at:{type:Date, default:Date.now()}
})

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo