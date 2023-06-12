const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app  = require('../app')
const server = app.listen(8080, () => console.log('Testing on PORT 8080'))

const ToDo = require('../models/toDoModels')
let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

describe('Testing todo endpoints', () => {

    test('this should test listing', async () => {
        const response = await request(app)
        .get('/')

        expect(response.body).toMatchObject({})
    })

    test('this should test creating todo', async () => {
        const response = await request(app)
        .post('/createToDo')
        .send({ title: 'checking test title', description: 'test description', completed: true })
        
        console.log('!!!!!!!!!!!!!!!!!!!!!!')
        console.log(response.body.title)
        expect(response.body.title).toEqual('checking test title')

    })

    test('this should test getting a specific item', async () => {
        const todo = new ToDo ({
            title: 'checking test title', description: 'test description', completed: true
        })
        await todo.save()

        const response = await request(app)
        //.post('/getToDo')
        .put(`/getToDo/${toDo.id}`)

        expect(response.body.todo.title).toEqual('checking test title')
    })

    test('this needs to update a todo item', async () => {
        const toDo = new ToDo.send({ title: 'hot chicken', description: 'test', completed: false})
        await toDo.save()
        
        const response = await request(app) 
        .put(`/todo/${user.id}`)
        .send({ title: 'hot chicken', description: 'test', completed: false})
          
        expect(response.statusCode).toBe(200)
    })

    test('It should delete the user', async ()=>{
        const toDo = new ToDo.send({ title: 'hot chicken', description: 'test', completed: false})
        await toDo.save() 
        const response = await request(app)
        .delete(`/todo/${todo.id}`)

        expect(response.body.message).toEqual('item deleted successfully')
      })
})