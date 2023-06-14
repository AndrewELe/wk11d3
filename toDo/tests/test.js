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

describe('Testing todo endpoints (positive testing methods)', () => {

    test('this should test listing', async () => {
        const response = await request(app)
        .get('/todos')

        expect(response.body).toMatchObject({})
    })

    test('this should test creating todo', async () => {
        const response = await request(app)
        .post('/todos')
        .send({ title: 'checking test title', description: 'test description', completed: true })

        expect(response.body.title).toEqual('checking test title')
        expect(response.body.description).toEqual('test description')
        expect(response.body.completed).toEqual(true)
        expect(response.body).toHaveProperty('created_at')
    })

    test('this should test getting a specific item', async () => {
        const todo = new ToDo ({
            title: 'checking test title specifically', description: 'test description specfically', completed: true
        })
        await todo.save()
        const response = await request(app).get(`/todos/${todo.id}`)

        expect(response.body.title).toEqual('checking test title specifically')
        expect(response.body.description).toEqual('test description specfically')
        expect(response.body).toHaveProperty('created_at')
    })

    test('this needs to update a todo item', async () => {
        const toDo = new ToDo({ title: 'hot chicken', description: 'test', completed: false})
        await toDo.save()
        
        const response = await request(app).put(`/todos/${toDo.id}`).send({ title: 'hot turkey', description: 'test description 2', completed: true })

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('to do item has been updated')
    })

    test('It should delete the todo listing', async ()=>{
        const toDo = new ToDo({ title: 'hot chicken', description: 'test', completed: false})
        await toDo.save() 
        const response = await request(app).delete(`/todos/${toDo.id}`)

        expect(response.body.message).toEqual('item deleted successfully')
      })
})

