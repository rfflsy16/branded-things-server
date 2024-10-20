const request = require('supertest')
const app = require('../app')

const { hash } = require('../helpers/bcrypt')

const { sequelize } = require('../models')
const queryInterface = sequelize.getQueryInterface()

let users = require('../data/user.json')

beforeAll(async () => {
    users.forEach(el => {
        delete el.id
        el.password = hash(el.password)
        el.updatedAt = el.createdAt = new Date()
    })
    await queryInterface.bulkInsert('Users', users, {})
})

afterAll(async () => {
    await queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true })
})

// post login
describe('POST /login', () => {
    describe('POST /login - succeed', () => {
        it('should be return access_token', async () => {
            const response = await request(app)
            .post('/login')
            .send({
                email: 'admin@example.com',
                password: 'password123'
            })
            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('access_token', expect.any(String))
        })
    })
    describe('POST /login - fail', () => {
        it('should be return an error message', async () => {
            const response = await request(app)
            .post('/login')
            .send({
                email: 'admin@example.com',
                password: ''
            })
            expect(response.status).toBe(401)        
            expect(response.body.message).toBe('Username/Password salah')
        })
    })
    describe('POST /login - fail', () => {
        it('should be return an error message', async () => {
            const response = await request(app)
            .post('/login')
            .send({
                email: '',
                password: 'password123'
            })
            expect(response.status).toBe(401)        
            expect(response.body.message).toBe('Username/Password salah')
        })
    })
    describe('POST /login - fail', () => {
        it('should be return an error message', async () => {
            const response = await request(app)
            .post('/login')
            .send({
                email: 'mamang10@gmail.com',
                password: 'password123'
            })
            expect(response.status).toBe(404)        
            expect(response.body.message).toBe('Data not found')
        })
    })
    describe('POST /login - fail', () => {
        it('should be return an error message', async () => {
            const response = await request(app)
            .post('/login')
            .send({
                email: 'mamang10@gmail.com',
                password: 'password12356'
            })
            expect(response.status).toBe(404)        
            expect(response.body.message).toBe('Data not found')
        })
    })
})