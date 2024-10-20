const request = require('supertest')
const app = require('../app')
const { signToken } = require('../helpers/jwt.js')
const { hash } = require('../helpers/bcrypt')
const { sequelize } = require('../models')
let users = require('../data/user.json')
let category = require('../data/category.json')
let product = require('../data/product.json')
const { DESCRIBE } = require('sequelize/lib/query-types')
const { get } = require('../routers')


beforeAll(async () => {
    // seeding Users
    users.forEach(el => {
        delete el.id
        el.password = hash(el.password)
        el.updatedAt = el.createdAt = new Date()
    })
    // seeding Categories
    category.forEach(el => {
        delete el.id
        el.updatedAt = el.createdAt = new Date()
    })
    // seeding Products
    product.forEach(el => {
        delete el.id
        el.updatedAt = el.createdAt = new Date()
    })
    
    await sequelize.queryInterface.bulkInsert('Users', users, {})
    await sequelize.queryInterface.bulkInsert('Categories', category, {})
    await sequelize.queryInterface.bulkInsert('Products', product, {})


    const payload = {
        id: 1,
        email: 'admin@example.com',
        role: 'admin'
    }
    access_token = signToken(payload)

})

afterAll(async () => {
    await sequelize.queryInterface.bulkDelete('Users', null, {truncate: true, cascade: true, restartIdentity: true})
    await sequelize.queryInterface.bulkDelete('Categories', null, {truncate: true, cascade: true, restartIdentity: true})
    await sequelize.queryInterface.bulkDelete('Products', null, {truncate: true, cascade: true, restartIdentity: true})
})


describe('GET /products', () => {
    describe('GET /products - succeed', () => {
        it('')
    })
})
