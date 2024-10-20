const request = require('supertest')
const app = require('../app')

const { signToken } = require('../helpers/jwt.js')
const { hash } = require('../helpers/bcrypt')

const { sequelize } = require('../models')
const queryInterface = sequelize.getQueryInterface()

let users = require('../data/user.json')
let category = require('../data/category.json')
let product = require('../data/product.json')

let access_token, access_token_staff;

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

    // console.log(' ini test')
    
    await queryInterface.bulkInsert('Users', users, {})
    await queryInterface.bulkInsert('Categories', category, {})
    await queryInterface.bulkInsert('Products', product, {})


    const admin = {
        id: 1,
        email: 'admin@example.com',
        role: 'admin'
    }
    
    const staff = {
        id: 4,
        email: 'user3@example.com',
        role: 'staff'
    }


    access_token = signToken(admin)
    access_token_staff = signToken(staff)
    


})

afterAll(async () => {
    await queryInterface.bulkDelete('Users', null, {truncate: true, cascade: true, restartIdentity: true})
    await queryInterface.bulkDelete('Categories', null, {truncate: true, cascade: true, restartIdentity: true})
    await queryInterface.bulkDelete('Products', null, {truncate: true, cascade: true, restartIdentity: true})
})


describe('GET /products', () => {
    describe('GET /products - succeed', () => {
        it('should be return array of object instance data products', async () => {
            const response = await request(app)
            .get(('/products'))
            .set('Authorization', `Bearer ${access_token}`)

            expect(response.status).toBe(200)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body).toHaveProperty('message', expect.any(String))
            expect(response.body.message).toBe('Success read Products')
            
        })
    })

    describe('GET /products - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .get('/products')
            // ketika tokennya salah
                .set('Authorization', `Bearer blablabalbal`)

            expect(response.status).toBe(401)
            expect(response.body).toBeInstanceOf(Object)
            expect(response.body.message).toBe('Please login first')
        })
    })
})


// post product
describe('POST /products', () => {
    describe('POST /products - succeed', () => {
        it('should be return object of object instance data products', async () => {
            const response = await request(app)
                .post('/products')
                .set('Authorization', `Bearer ${access_token}`)
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                    authorId: 2
                })

                expect(response.status).toBe(201)
                expect(response.body.message).toBe('Success create new Product')
        })
    })
    
    describe('POST /products - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .post('/products')
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                    authorId: 2
                })

                expect(response.status).toBe(401)
                expect(response.body.message).toBe('Please login first')
        })
    })
    describe('POST /products - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .post('/products')
                .set('Authorization', `Bearer blawdnbwkj`)
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                    authorId: 2
                })

                expect(response.status).toBe(401)
                expect(response.body.message).toBe('Please login first')
        })
    })
    describe('POST /products - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .post('/products')
                .set('Authorization', `Bearer ${access_token}`)
                .send({
                    name: '',
                    description: '',
                    price: '',
                    stock: '',
                    imgUrl: '',
                    categoryId: '',
                    authorId: ''
                })

                expect(response.status).toBe(400)
                expect(response.body.message).toEqual(expect.arrayContaining([
                    "name is required",
                    "description is required",
                    "price is required",
                    "stock is required",
                    "imgUrl is required",
                    "categoryId is required"
                ]))
        })
    })
    
})

// put producrs
describe('PUT /products/:id', () => {
    describe('PUT /products/:id - succeed', () => {
        it('should be return object of object instance data products', async () => {
            const response = await request(app)
                .put('/products/2')
                .set('Authorization', `Bearer ${access_token}`)
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                })

            expect(response.status).toBe(200)
            expect(response.body.message).toBe(`Success edit product by id ${response.body.products.id}`)
        })
    })
    describe('PUT /products/:id - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .put('/products/2')
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                })

            expect(response.status).toBe(401)
            expect(response.body.message).toBe('Please login first')
        })
    })
    describe('PUT /products/:id - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .put('/products/2')
                .set('Authorization', `Bearer blablabla`)
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                })

            expect(response.status).toBe(401)
            expect(response.body.message).toBe('Please login first')
        })
    })
    describe('PUT /products/:id - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .put('/products/:id')
                .set('Authorization', `Bearer ${access_token}`)
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                })

            expect(response.status).toBe(400)
            expect(response.body.message).toBe('Invalid input')
        })
    })
    describe('PUT /products/:id - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .put('/products/5')
                .set('Authorization', `Bearer ${access_token_staff}`)
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                })

            expect(response.status).toBe(403)
            expect(response.body.message).toBe('You aren`t the author of this Product')        })
    })
    describe('PUT /products/:id - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
                .put('/products/100')
                .set('Authorization', `Bearer ${access_token}`)
                .send({
                    name: 'test',
                    description: 'test',
                    price: 1209,
                    stock: 12,
                    imgUrl: 'test',
                    categoryId: 1,
                })

            expect(response.status).toBe(404)
            expect(response.body.message).toBe('Data not found')
        })
    })
})


// public readById 
describe('GET /pub/:id', () => {
    describe('GET /pub/:id - succeed', () => {
        it('should be return data of detail Products', async () => {
            const response = await request(app)
            .get('/pub/3')

            expect(response.status).toBe(200)
            expect(response.body.message).toBe(`Success read product with id ${response.body.product.id}`)
        })
    })

    describe('GET /pub/:id - fail', () => {
        it('should be return an object with error message', async () => {
            const response = await request(app)
            .get('/pub/100')

            expect(response.status).toBe(404)
            expect(response.body.message).toBe(`Data not found`)
        })
    })
})

// public readAll
describe('GET /pub', () => {
    describe('GET /pub - succeed', () => {
        it('should be return an all data of production', async () => {
            const response = await request(app)
            .get('/pub')

            expect(response.status).toBe(200)
            expect(response.body.message).toBe('Success read Products')
        })
    })
    describe('GET /pub - succeed', () => {
        it('should be return an all data of production', async () => {
            const response = await request(app)
            .get('/pub/?filter=2')

            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('result')
            expect(response.body).toBeInstanceOf(Object)
        })
    })
    describe('GET /pub - succeed', () => {
        it('should be return an all data of production', async () => {
            const response = await request(app)
            .get('/pub/?page=1')

            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('result')
            expect(response.body).toBeInstanceOf(Object)
        })
    })
    describe('GET /pub - succeed', () => {
        it('should be return an all data of production', async () => {
            const response = await request(app)
            .get('/pub/?page=1')

            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('result')
            expect(response.body).toBeInstanceOf(Object)
        })
    })
})

describe('DELETE /products', () => {
    describe('DELETE /products - succeed', () => {
        it('should be return an message Success delete product', async() => {
            const response = await request(app)
            .delete('/products/10')
            .set('Authorization', `Bearer ${access_token}`)

            expect(response.status).toBe(200)
            expect(response.body.message).toBe(`Success delete product by id 10`)
        })
    })
    describe('DELETE /products - fail', () => {
        it('because not login', async() => {
            const response = await request(app)
            .delete('/products/10')

            expect(response.status).toBe(401)
            expect(response.body.message).toBe(`Please login first`)
        })
    })
    describe('DELETE /products - fail', () => {
        it('because token invalid', async() => {
            const response = await request(app)
            .delete('/products/10')
            .set('Authorization', `Bearer blabala`)

            expect(response.status).toBe(401)
            expect(response.body.message).toBe(`Please login first`)
        })
    })
    describe('DELETE /products - fail', () => {
        it('because id not found', async() => {
            const response = await request(app)
            .delete('/products/123')
            .set('Authorization', `Bearer ${access_token}`)

            expect(response.status).toBe(404)
            expect(response.body.message).toBe(`Data not found`)
        })
    })
    describe('DELETE /products - fail', () => {
        it('because staff cant delete other data products except his data products', async() => {
            const response = await request(app)
            .delete('/products/12')
            .set('Authorization', `Bearer ${access_token_staff}`)

            expect(response.status).toBe(403)
            expect(response.body.message).toBe('You aren`t the author of this Product')
        })
    })
})