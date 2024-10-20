[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15564558&assignment_repo_type=AssignmentRepo)

# P2-Challenge-1 (Server Side)

## List of Endpoint

Public endpoints _(can be accessed without authentication)_:

1. `GET /pub/` _(queries available)_
2. `GET /pub/:id`

Admin & staff _(to get authentication)_:

3. `POST /login`

Authentication required _(any admin or staff)_:

5. `POST /products`
4. `GET /products` 
6. `GET /products/:id`
7. `GET /categories`
8. `POST /categories`
9. `PUT /categories/:id`

Authentication & Authorization required _(admin or staff who is the author of the product)_:

10. `PUT /products/:id`
11. `PATCH /products/:id`
12. `DELETE /products/:id`

Authentication & Authorization required _(admin only)_:

13. `POST /add-user`

&nbsp;

## Public Endpoints _(can be accessed without authentication)_

### 1. GET /pub

_Response_:

- 200 - OK

```json
{
    "message": "Success read Products",
    "products": {
        "total": 22,
        "data": [
            {
                "id": 4,
                "name": "Sneakers",
                "description": "Comfortable sneakers for daily wear.",
                "price": 499000,
                "stock": 60,
                "imgUrl": "https://example.com/products/sneakers1.jpg",
                "categoryId": 4,
                "authorId": 2,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 2,
                    "username": "user1",
                    "email": "user1@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567891",
                    "address": "Bandung, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.110Z",
                    "updatedAt": "2024-10-19T16:29:50.110Z"
                }
            },
            {
                "id": 5,
                "name": "Formal Shoes",
                "description": "Stylish formal shoes for office and events.",
                "price": 599000,
                "stock": 25,
                "imgUrl": "https://example.com/products/shoes1.jpg",
                "categoryId": 5,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            },
            {
                "id": 6,
                "name": "Woolen Scarf",
                "description": "Warm woolen scarf for winter.",
                "price": 99000,
                "stock": 80,
                "imgUrl": "https://example.com/products/scarf1.jpg",
                "categoryId": 6,
                "authorId": 3,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 3,
                    "username": "user2",
                    "email": "user2@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567892",
                    "address": "Bandung, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.172Z",
                    "updatedAt": "2024-10-19T16:29:50.172Z"
                }
            },
            {
                "id": 7,
                "name": "Classic Watch",
                "description": "Classic design watch with leather strap.",
                "price": 1299000,
                "stock": 20,
                "imgUrl": "https://example.com/products/watch1.jpg",
                "categoryId": 7,
                "authorId": 3,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 3,
                    "username": "user2",
                    "email": "user2@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567892",
                    "address": "Bandung, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.172Z",
                    "updatedAt": "2024-10-19T16:29:50.172Z"
                }
            },
            {
                "id": 8,
                "name": "Sports Cap",
                "description": "Breathable sports cap for outdoor activities.",
                "price": 149000,
                "stock": 70,
                "imgUrl": "https://example.com/products/cap1.jpg",
                "categoryId": 8,
                "authorId": 4,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 4,
                    "username": "user3",
                    "email": "user3@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567893",
                    "address": "Surabaya, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.235Z",
                    "updatedAt": "2024-10-19T16:29:50.235Z"
                }
            },
            {
                "id": 9,
                "name": "Backpack",
                "description": "Spacious and durable backpack for travel.",
                "price": 399000,
                "stock": 40,
                "imgUrl": "https://example.com/products/backpack1.jpg",
                "categoryId": 9,
                "authorId": 4,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 4,
                    "username": "user3",
                    "email": "user3@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567893",
                    "address": "Surabaya, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.235Z",
                    "updatedAt": "2024-10-19T16:29:50.235Z"
                }
            },
            {
                "id": 11,
                "name": "Wristband",
                "description": "Stylish wristband with adjustable strap.",
                "price": 99000,
                "stock": 100,
                "imgUrl": "https://example.com/products/wristband1.jpg",
                "categoryId": 11,
                "authorId": 5,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 5,
                    "username": "user4",
                    "email": "user4@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567894",
                    "address": "Medan, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.296Z",
                    "updatedAt": "2024-10-19T16:29:50.296Z"
                }
            },
            {
                "id": 12,
                "name": "Graphic T-Shirt",
                "description": "T-shirt with unique graphic design.",
                "price": 219000,
                "stock": 50,
                "imgUrl": "https://example.com/products/tshirt2.jpg",
                "categoryId": 1,
                "authorId": 6,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 6,
                    "username": "user5",
                    "email": "user5@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567895",
                    "address": "Bali, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.358Z",
                    "updatedAt": "2024-10-19T16:29:50.358Z"
                }
            },
            {
                "id": 13,
                "name": "Hoodie",
                "description": "Comfortable hoodie with front pockets.",
                "price": 399000,
                "stock": 35,
                "imgUrl": "https://example.com/products/hoodie1.jpg",
                "categoryId": 3,
                "authorId": 6,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 6,
                    "username": "user5",
                    "email": "user5@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567895",
                    "address": "Bali, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.358Z",
                    "updatedAt": "2024-10-19T16:29:50.358Z"
                }
            },
            {
                "id": 14,
                "name": "Denim Jacket",
                "description": "Classic denim jacket with button-up front.",
                "price": 599000,
                "stock": 18,
                "imgUrl": "https://example.com/products/jacket2.jpg",
                "categoryId": 3,
                "authorId": 2,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 2,
                    "username": "user1",
                    "email": "user1@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567891",
                    "address": "Bandung, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.110Z",
                    "updatedAt": "2024-10-19T16:29:50.110Z"
                }
            },
            {
                "id": 15,
                "name": "Running Shoes",
                "description": "Lightweight running shoes for comfort and speed.",
                "price": 399000,
                "stock": 25,
                "imgUrl": "https://example.com/products/shoes2.jpg",
                "categoryId": 4,
                "authorId": 4,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 4,
                    "username": "user3",
                    "email": "user3@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567893",
                    "address": "Surabaya, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.235Z",
                    "updatedAt": "2024-10-19T16:29:50.235Z"
                }
            },
            {
                "id": 16,
                "name": "Dress Shirt",
                "description": "Formal dress shirt in classic fit.",
                "price": 299000,
                "stock": 40,
                "imgUrl": "https://example.com/products/shirt1.jpg",
                "categoryId": 1,
                "authorId": 5,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 5,
                    "username": "user4",
                    "email": "user4@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567894",
                    "address": "Medan, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.296Z",
                    "updatedAt": "2024-10-19T16:29:50.296Z"
                }
            },
            {
                "id": 17,
                "name": "Leather Belt",
                "description": "Genuine leather belt with metal buckle.",
                "price": 199000,
                "stock": 60,
                "imgUrl": "https://example.com/products/belt1.jpg",
                "categoryId": 5,
                "authorId": 3,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 3,
                    "username": "user2",
                    "email": "user2@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567892",
                    "address": "Bandung, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.172Z",
                    "updatedAt": "2024-10-19T16:29:50.172Z"
                }
            },
            {
                "id": 18,
                "name": "Winter Gloves",
                "description": "Warm and durable gloves for winter.",
                "price": 149000,
                "stock": 55,
                "imgUrl": "https://example.com/products/gloves1.jpg",
                "categoryId": 6,
                "authorId": 6,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 6,
                    "username": "user5",
                    "email": "user5@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567895",
                    "address": "Bali, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.358Z",
                    "updatedAt": "2024-10-19T16:29:50.358Z"
                }
            },
            {
                "id": 19,
                "name": "Casual Shorts",
                "description": "Comfortable casual shorts for summer.",
                "price": 249000,
                "stock": 45,
                "imgUrl": "https://example.com/products/shorts1.jpg",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            },
            {
                "id": 20,
                "name": "Wool Sweater",
                "description": "Cozy wool sweater for winter days.",
                "price": 499000,
                "stock": 25,
                "imgUrl": "https://example.com/products/sweater1.jpg",
                "categoryId": 6,
                "authorId": 6,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 6,
                    "username": "user5",
                    "email": "user5@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567895",
                    "address": "Bali, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.358Z",
                    "updatedAt": "2024-10-19T16:29:50.358Z"
                }
            },
            {
                "id": 21,
                "name": "Leather Boots",
                "description": "Durable leather boots for outdoor adventures.",
                "price": 799000,
                "stock": 30,
                "imgUrl": "https://example.com/products/boots1.jpg",
                "categoryId": 4,
                "authorId": 4,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 4,
                    "username": "user3",
                    "email": "user3@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567893",
                    "address": "Surabaya, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.235Z",
                    "updatedAt": "2024-10-19T16:29:50.235Z"
                }
            },
            {
                "id": 22,
                "name": "Athletic Socks",
                "description": "Breathable and comfortable athletic socks.",
                "price": 99000,
                "stock": 90,
                "imgUrl": "https://example.com/products/socks1.jpg",
                "categoryId": 7,
                "authorId": 5,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 5,
                    "username": "user4",
                    "email": "user4@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567894",
                    "address": "Medan, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.296Z",
                    "updatedAt": "2024-10-19T16:29:50.296Z"
                }
            },
            {
                "id": 23,
                "name": "Cargo Pants",
                "description": "Comfortable cargo pants with multiple pockets.",
                "price": 349000,
                "stock": 35,
                "imgUrl": "https://example.com/products/cargopants1.jpg",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            },
            {
                "id": 1,
                "name": "admin",
                "description": "keren",
                "price": 1200000,
                "stock": 13,
                "imgUrl": "nkfejf es",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T17:40:45.790Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            },
            {
                "id": 10,
                "name": "admin",
                "description": "keren",
                "price": 1200000,
                "stock": 13,
                "imgUrl": "nkfejf es",
                "categoryId": 2,
                "authorId": 5,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-20T09:29:55.266Z",
                "User": {
                    "id": 5,
                    "username": "user4",
                    "email": "user4@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567894",
                    "address": "Medan, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.296Z",
                    "updatedAt": "2024-10-19T16:29:50.296Z"
                }
            },
            {
                "id": 2,
                "name": "admin",
                "description": "keren",
                "price": 1200000,
                "stock": 13,
                "imgUrl": "nkfejf es",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-20T11:13:28.506Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            }
        ]
    }
}
```

Available queries:

- search _(to search by name)_
- sort _(to sort by product's created time)_
- filter _(to filter by categories)_
- page _(pagination)_

_Request_:

- query

```json
{
  "search": "snea",
  "sort": "DESC",
  "filter": {
    "category": "1"
  }
}
```

_Response_:

- 200 - OK

```json
{
    "message": "Success read Products",
    "products": {
        "search": "snea",
        "total": 1,
        "data": [
            {
                "id": 4,
                "name": "Sneakers",
                "description": "Comfortable sneakers for daily wear.",
                "price": 499000,
                "stock": 60,
                "imgUrl": "https://example.com/products/sneakers1.jpg",
                "categoryId": 4,
                "authorId": 2,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 2,
                    "username": "user1",
                    "email": "user1@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567891",
                    "address": "Bandung, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.110Z",
                    "updatedAt": "2024-10-19T16:29:50.110Z"
                }
            }
        ]
    }
}
```

&nbsp;

With pagination:

_Request_:

- query

```json
{
  "page": 2
}
```

_Response_:

- 200 - OK

```json
{
    "message": "Success read Products",
    "products": {
        "currentPage": 2,
        "size": 10,
        "totalPage": 3,
        "total": 22,
        "data": [
            {
                "id": 15,
                "name": "Running Shoes",
                "description": "Lightweight running shoes for comfort and speed.",
                "price": 399000,
                "stock": 25,
                "imgUrl": "https://example.com/products/shoes2.jpg",
                "categoryId": 4,
                "authorId": 4,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 4,
                    "username": "user3",
                    "email": "user3@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567893",
                    "address": "Surabaya, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.235Z",
                    "updatedAt": "2024-10-19T16:29:50.235Z"
                }
            },
            {
                "id": 16,
                "name": "Dress Shirt",
                "description": "Formal dress shirt in classic fit.",
                "price": 299000,
                "stock": 40,
                "imgUrl": "https://example.com/products/shirt1.jpg",
                "categoryId": 1,
                "authorId": 5,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 5,
                    "username": "user4",
                    "email": "user4@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567894",
                    "address": "Medan, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.296Z",
                    "updatedAt": "2024-10-19T16:29:50.296Z"
                }
            },
            {
                "id": 17,
                "name": "Leather Belt",
                "description": "Genuine leather belt with metal buckle.",
                "price": 199000,
                "stock": 60,
                "imgUrl": "https://example.com/products/belt1.jpg",
                "categoryId": 5,
                "authorId": 3,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 3,
                    "username": "user2",
                    "email": "user2@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567892",
                    "address": "Bandung, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.172Z",
                    "updatedAt": "2024-10-19T16:29:50.172Z"
                }
            },
            {
                "id": 18,
                "name": "Winter Gloves",
                "description": "Warm and durable gloves for winter.",
                "price": 149000,
                "stock": 55,
                "imgUrl": "https://example.com/products/gloves1.jpg",
                "categoryId": 6,
                "authorId": 6,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 6,
                    "username": "user5",
                    "email": "user5@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567895",
                    "address": "Bali, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.358Z",
                    "updatedAt": "2024-10-19T16:29:50.358Z"
                }
            },
            {
                "id": 19,
                "name": "Casual Shorts",
                "description": "Comfortable casual shorts for summer.",
                "price": 249000,
                "stock": 45,
                "imgUrl": "https://example.com/products/shorts1.jpg",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            },
            {
                "id": 20,
                "name": "Wool Sweater",
                "description": "Cozy wool sweater for winter days.",
                "price": 499000,
                "stock": 25,
                "imgUrl": "https://example.com/products/sweater1.jpg",
                "categoryId": 6,
                "authorId": 6,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 6,
                    "username": "user5",
                    "email": "user5@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567895",
                    "address": "Bali, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.358Z",
                    "updatedAt": "2024-10-19T16:29:50.358Z"
                }
            },
            {
                "id": 21,
                "name": "Leather Boots",
                "description": "Durable leather boots for outdoor adventures.",
                "price": 799000,
                "stock": 30,
                "imgUrl": "https://example.com/products/boots1.jpg",
                "categoryId": 4,
                "authorId": 4,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 4,
                    "username": "user3",
                    "email": "user3@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567893",
                    "address": "Surabaya, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.235Z",
                    "updatedAt": "2024-10-19T16:29:50.235Z"
                }
            },
            {
                "id": 22,
                "name": "Athletic Socks",
                "description": "Breathable and comfortable athletic socks.",
                "price": 99000,
                "stock": 90,
                "imgUrl": "https://example.com/products/socks1.jpg",
                "categoryId": 7,
                "authorId": 5,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 5,
                    "username": "user4",
                    "email": "user4@example.com",
                    "role": "staff",
                    "phoneNumber": "081234567894",
                    "address": "Medan, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.296Z",
                    "updatedAt": "2024-10-19T16:29:50.296Z"
                }
            },
            {
                "id": 23,
                "name": "Cargo Pants",
                "description": "Comfortable cargo pants with multiple pockets.",
                "price": 349000,
                "stock": 35,
                "imgUrl": "https://example.com/products/cargopants1.jpg",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T16:29:50.925Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            },
            {
                "id": 1,
                "name": "admin",
                "description": "keren",
                "price": 1200000,
                "stock": 13,
                "imgUrl": "nkfejf es",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-19T16:29:50.925Z",
                "updatedAt": "2024-10-19T17:40:45.790Z",
                "User": {
                    "id": 1,
                    "username": "admin",
                    "email": "admin@example.com",
                    "role": "admin",
                    "phoneNumber": "081234567890",
                    "address": "Jakarta, Indonesia",
                    "createdAt": "2024-10-19T16:29:50.048Z",
                    "updatedAt": "2024-10-19T16:29:50.048Z"
                }
            }
        ]
    }
}
```

&nbsp;

### 2. GET /pub/:id

_Request_:

- params

```json
{
  "id": 12
}
```

_Responses_

- 200 - OK

```json
{
    "message": "Success read product with id 12",
    "product": {
        "id": 12,
        "name": "Graphic T-Shirt",
        "description": "T-shirt with unique graphic design.",
        "price": 219000,
        "stock": 50,
        "imgUrl": "https://example.com/products/tshirt2.jpg",
        "categoryId": 1,
        "authorId": 6,
        "createdAt": "2024-10-19T16:29:50.925Z",
        "updatedAt": "2024-10-19T16:29:50.925Z"
    }
}
```

&nbsp;

- 404 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Product not found"
}
```

&nbsp;

## Admin & staff _(to get authentication)_:

### 3. POST /login

_Request_:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Responses_:

- 200 - OK

```json
{
  "acess_token": "string"
}
```

&nbsp;

- 400 - Bad Request _(if email or password is empty)_

```json
{
  "message": "Username/Password salah"
}
```

- 401 - Unauthorized _(if email or username or password is wrong)_

```json
{
  "message": "Unable to login"
}
```

&nbsp;

## Authentication required _(any admin or staff)_:

_Global request for every endpoint below_:

- headers

```json
{
  "Authorization": "Bearer <access_token>"
}
```

### 4. GET /products

_Response_:

- 200 - OK

```json
{
    "message": "Success read Products",
    "products": [
        {
            "id": 16,
            "name": "Dress Shirt",
            "description": "Formal dress shirt in classic fit.",
            "price": 299000,
            "stock": 40,
            "imgUrl": "https://example.com/products/shirt1.jpg",
            "categoryId": 1,
            "authorId": 5,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 5,
                "username": "user4",
                "email": "user4@example.com",
                "role": "staff",
                "phoneNumber": "081234567894",
                "address": "Medan, Indonesia",
                "createdAt": "2024-10-19T16:29:50.296Z",
                "updatedAt": "2024-10-19T16:29:50.296Z"
            },
            "Category": {
                "id": 1,
                "name": "T-Shirts",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 12,
            "name": "Graphic T-Shirt",
            "description": "T-shirt with unique graphic design.",
            "price": 219000,
            "stock": 50,
            "imgUrl": "https://example.com/products/tshirt2.jpg",
            "categoryId": 1,
            "authorId": 6,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 6,
                "username": "user5",
                "email": "user5@example.com",
                "role": "staff",
                "phoneNumber": "081234567895",
                "address": "Bali, Indonesia",
                "createdAt": "2024-10-19T16:29:50.358Z",
                "updatedAt": "2024-10-19T16:29:50.358Z"
            },
            "Category": {
                "id": 1,
                "name": "T-Shirts",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 2,
            "name": "admin",
            "description": "keren",
            "price": 1200000,
            "stock": 13,
            "imgUrl": "nkfejf es",
            "categoryId": 2,
            "authorId": 1,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-20T11:13:28.506Z",
            "User": {
                "id": 1,
                "username": "admin",
                "email": "admin@example.com",
                "role": "admin",
                "phoneNumber": "081234567890",
                "address": "Jakarta, Indonesia",
                "createdAt": "2024-10-19T16:29:50.048Z",
                "updatedAt": "2024-10-19T16:29:50.048Z"
            },
            "Category": {
                "id": 2,
                "name": "Jeans",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 10,
            "name": "admin",
            "description": "keren",
            "price": 1200000,
            "stock": 13,
            "imgUrl": "nkfejf es",
            "categoryId": 2,
            "authorId": 5,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-20T09:29:55.266Z",
            "User": {
                "id": 5,
                "username": "user4",
                "email": "user4@example.com",
                "role": "staff",
                "phoneNumber": "081234567894",
                "address": "Medan, Indonesia",
                "createdAt": "2024-10-19T16:29:50.296Z",
                "updatedAt": "2024-10-19T16:29:50.296Z"
            },
            "Category": {
                "id": 2,
                "name": "Jeans",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 1,
            "name": "admin",
            "description": "keren",
            "price": 1200000,
            "stock": 13,
            "imgUrl": "nkfejf es",
            "categoryId": 2,
            "authorId": 1,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T17:40:45.790Z",
            "User": {
                "id": 1,
                "username": "admin",
                "email": "admin@example.com",
                "role": "admin",
                "phoneNumber": "081234567890",
                "address": "Jakarta, Indonesia",
                "createdAt": "2024-10-19T16:29:50.048Z",
                "updatedAt": "2024-10-19T16:29:50.048Z"
            },
            "Category": {
                "id": 2,
                "name": "Jeans",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 23,
            "name": "Cargo Pants",
            "description": "Comfortable cargo pants with multiple pockets.",
            "price": 349000,
            "stock": 35,
            "imgUrl": "https://example.com/products/cargopants1.jpg",
            "categoryId": 2,
            "authorId": 1,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 1,
                "username": "admin",
                "email": "admin@example.com",
                "role": "admin",
                "phoneNumber": "081234567890",
                "address": "Jakarta, Indonesia",
                "createdAt": "2024-10-19T16:29:50.048Z",
                "updatedAt": "2024-10-19T16:29:50.048Z"
            },
            "Category": {
                "id": 2,
                "name": "Jeans",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 19,
            "name": "Casual Shorts",
            "description": "Comfortable casual shorts for summer.",
            "price": 249000,
            "stock": 45,
            "imgUrl": "https://example.com/products/shorts1.jpg",
            "categoryId": 2,
            "authorId": 1,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 1,
                "username": "admin",
                "email": "admin@example.com",
                "role": "admin",
                "phoneNumber": "081234567890",
                "address": "Jakarta, Indonesia",
                "createdAt": "2024-10-19T16:29:50.048Z",
                "updatedAt": "2024-10-19T16:29:50.048Z"
            },
            "Category": {
                "id": 2,
                "name": "Jeans",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 14,
            "name": "Denim Jacket",
            "description": "Classic denim jacket with button-up front.",
            "price": 599000,
            "stock": 18,
            "imgUrl": "https://example.com/products/jacket2.jpg",
            "categoryId": 3,
            "authorId": 2,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 2,
                "username": "user1",
                "email": "user1@example.com",
                "role": "admin",
                "phoneNumber": "081234567891",
                "address": "Bandung, Indonesia",
                "createdAt": "2024-10-19T16:29:50.110Z",
                "updatedAt": "2024-10-19T16:29:50.110Z"
            },
            "Category": {
                "id": 3,
                "name": "Accessories",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 13,
            "name": "Hoodie",
            "description": "Comfortable hoodie with front pockets.",
            "price": 399000,
            "stock": 35,
            "imgUrl": "https://example.com/products/hoodie1.jpg",
            "categoryId": 3,
            "authorId": 6,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 6,
                "username": "user5",
                "email": "user5@example.com",
                "role": "staff",
                "phoneNumber": "081234567895",
                "address": "Bali, Indonesia",
                "createdAt": "2024-10-19T16:29:50.358Z",
                "updatedAt": "2024-10-19T16:29:50.358Z"
            },
            "Category": {
                "id": 3,
                "name": "Accessories",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 21,
            "name": "Leather Boots",
            "description": "Durable leather boots for outdoor adventures.",
            "price": 799000,
            "stock": 30,
            "imgUrl": "https://example.com/products/boots1.jpg",
            "categoryId": 4,
            "authorId": 4,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 4,
                "username": "user3",
                "email": "user3@example.com",
                "role": "staff",
                "phoneNumber": "081234567893",
                "address": "Surabaya, Indonesia",
                "createdAt": "2024-10-19T16:29:50.235Z",
                "updatedAt": "2024-10-19T16:29:50.235Z"
            },
            "Category": {
                "id": 4,
                "name": "Footwear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 15,
            "name": "Running Shoes",
            "description": "Lightweight running shoes for comfort and speed.",
            "price": 399000,
            "stock": 25,
            "imgUrl": "https://example.com/products/shoes2.jpg",
            "categoryId": 4,
            "authorId": 4,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 4,
                "username": "user3",
                "email": "user3@example.com",
                "role": "staff",
                "phoneNumber": "081234567893",
                "address": "Surabaya, Indonesia",
                "createdAt": "2024-10-19T16:29:50.235Z",
                "updatedAt": "2024-10-19T16:29:50.235Z"
            },
            "Category": {
                "id": 4,
                "name": "Footwear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 4,
            "name": "Sneakers",
            "description": "Comfortable sneakers for daily wear.",
            "price": 499000,
            "stock": 60,
            "imgUrl": "https://example.com/products/sneakers1.jpg",
            "categoryId": 4,
            "authorId": 2,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 2,
                "username": "user1",
                "email": "user1@example.com",
                "role": "admin",
                "phoneNumber": "081234567891",
                "address": "Bandung, Indonesia",
                "createdAt": "2024-10-19T16:29:50.110Z",
                "updatedAt": "2024-10-19T16:29:50.110Z"
            },
            "Category": {
                "id": 4,
                "name": "Footwear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 17,
            "name": "Leather Belt",
            "description": "Genuine leather belt with metal buckle.",
            "price": 199000,
            "stock": 60,
            "imgUrl": "https://example.com/products/belt1.jpg",
            "categoryId": 5,
            "authorId": 3,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 3,
                "username": "user2",
                "email": "user2@example.com",
                "role": "admin",
                "phoneNumber": "081234567892",
                "address": "Bandung, Indonesia",
                "createdAt": "2024-10-19T16:29:50.172Z",
                "updatedAt": "2024-10-19T16:29:50.172Z"
            },
            "Category": {
                "id": 5,
                "name": "Outerwear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 5,
            "name": "Formal Shoes",
            "description": "Stylish formal shoes for office and events.",
            "price": 599000,
            "stock": 25,
            "imgUrl": "https://example.com/products/shoes1.jpg",
            "categoryId": 5,
            "authorId": 1,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 1,
                "username": "admin",
                "email": "admin@example.com",
                "role": "admin",
                "phoneNumber": "081234567890",
                "address": "Jakarta, Indonesia",
                "createdAt": "2024-10-19T16:29:50.048Z",
                "updatedAt": "2024-10-19T16:29:50.048Z"
            },
            "Category": {
                "id": 5,
                "name": "Outerwear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 20,
            "name": "Wool Sweater",
            "description": "Cozy wool sweater for winter days.",
            "price": 499000,
            "stock": 25,
            "imgUrl": "https://example.com/products/sweater1.jpg",
            "categoryId": 6,
            "authorId": 6,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 6,
                "username": "user5",
                "email": "user5@example.com",
                "role": "staff",
                "phoneNumber": "081234567895",
                "address": "Bali, Indonesia",
                "createdAt": "2024-10-19T16:29:50.358Z",
                "updatedAt": "2024-10-19T16:29:50.358Z"
            },
            "Category": {
                "id": 6,
                "name": "Activewear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 18,
            "name": "Winter Gloves",
            "description": "Warm and durable gloves for winter.",
            "price": 149000,
            "stock": 55,
            "imgUrl": "https://example.com/products/gloves1.jpg",
            "categoryId": 6,
            "authorId": 6,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 6,
                "username": "user5",
                "email": "user5@example.com",
                "role": "staff",
                "phoneNumber": "081234567895",
                "address": "Bali, Indonesia",
                "createdAt": "2024-10-19T16:29:50.358Z",
                "updatedAt": "2024-10-19T16:29:50.358Z"
            },
            "Category": {
                "id": 6,
                "name": "Activewear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 6,
            "name": "Woolen Scarf",
            "description": "Warm woolen scarf for winter.",
            "price": 99000,
            "stock": 80,
            "imgUrl": "https://example.com/products/scarf1.jpg",
            "categoryId": 6,
            "authorId": 3,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 3,
                "username": "user2",
                "email": "user2@example.com",
                "role": "admin",
                "phoneNumber": "081234567892",
                "address": "Bandung, Indonesia",
                "createdAt": "2024-10-19T16:29:50.172Z",
                "updatedAt": "2024-10-19T16:29:50.172Z"
            },
            "Category": {
                "id": 6,
                "name": "Activewear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 22,
            "name": "Athletic Socks",
            "description": "Breathable and comfortable athletic socks.",
            "price": 99000,
            "stock": 90,
            "imgUrl": "https://example.com/products/socks1.jpg",
            "categoryId": 7,
            "authorId": 5,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 5,
                "username": "user4",
                "email": "user4@example.com",
                "role": "staff",
                "phoneNumber": "081234567894",
                "address": "Medan, Indonesia",
                "createdAt": "2024-10-19T16:29:50.296Z",
                "updatedAt": "2024-10-19T16:29:50.296Z"
            },
            "Category": {
                "id": 7,
                "name": "Formal Wear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 7,
            "name": "Classic Watch",
            "description": "Classic design watch with leather strap.",
            "price": 1299000,
            "stock": 20,
            "imgUrl": "https://example.com/products/watch1.jpg",
            "categoryId": 7,
            "authorId": 3,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 3,
                "username": "user2",
                "email": "user2@example.com",
                "role": "admin",
                "phoneNumber": "081234567892",
                "address": "Bandung, Indonesia",
                "createdAt": "2024-10-19T16:29:50.172Z",
                "updatedAt": "2024-10-19T16:29:50.172Z"
            },
            "Category": {
                "id": 7,
                "name": "Formal Wear",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 8,
            "name": "Sports Cap",
            "description": "Breathable sports cap for outdoor activities.",
            "price": 149000,
            "stock": 70,
            "imgUrl": "https://example.com/products/cap1.jpg",
            "categoryId": 8,
            "authorId": 4,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 4,
                "username": "user3",
                "email": "user3@example.com",
                "role": "staff",
                "phoneNumber": "081234567893",
                "address": "Surabaya, Indonesia",
                "createdAt": "2024-10-19T16:29:50.235Z",
                "updatedAt": "2024-10-19T16:29:50.235Z"
            },
            "Category": {
                "id": 8,
                "name": "Bags",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 9,
            "name": "Backpack",
            "description": "Spacious and durable backpack for travel.",
            "price": 399000,
            "stock": 40,
            "imgUrl": "https://example.com/products/backpack1.jpg",
            "categoryId": 9,
            "authorId": 4,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 4,
                "username": "user3",
                "email": "user3@example.com",
                "role": "staff",
                "phoneNumber": "081234567893",
                "address": "Surabaya, Indonesia",
                "createdAt": "2024-10-19T16:29:50.235Z",
                "updatedAt": "2024-10-19T16:29:50.235Z"
            },
            "Category": {
                "id": 9,
                "name": "Jewelry",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        },
        {
            "id": 11,
            "name": "Wristband",
            "description": "Stylish wristband with adjustable strap.",
            "price": 99000,
            "stock": 100,
            "imgUrl": "https://example.com/products/wristband1.jpg",
            "categoryId": 11,
            "authorId": 5,
            "createdAt": "2024-10-19T16:29:50.925Z",
            "updatedAt": "2024-10-19T16:29:50.925Z",
            "User": {
                "id": 5,
                "username": "user4",
                "email": "user4@example.com",
                "role": "staff",
                "phoneNumber": "081234567894",
                "address": "Medan, Indonesia",
                "createdAt": "2024-10-19T16:29:50.296Z",
                "updatedAt": "2024-10-19T16:29:50.296Z"
            },
            "Category": {
                "id": 11,
                "name": "Sweaters",
                "createdAt": "2024-10-19T16:29:50.922Z",
                "updatedAt": "2024-10-19T16:29:50.922Z"
            }
        }
    ]
}
```

Queries are available as like the public endpoint

&nbsp;

### 5. POST /products

_Request_:

- body

```json
{
  "name": "Jeans Bandung",
  "description": "sangatlah well",
  "price": 2000000,
  "stock": 12,
  "imgUrl": "example.jpg",
  "categoryId": 1
}
```

_Responses_:

- (201 - Created)

```json
{
    "message": "Success create new Product",
    "product": {
        "id": 26,
        "name": "Jeans Bandung",
        "description": "sangatlah well",
        "price": 2000000,
        "stock": 12,
        "imgUrl": "example.jpg",
        "categoryId": 1,
        "authorId": 1,
        "updatedAt": "2024-10-20T21:44:29.057Z",
        "createdAt": "2024-10-20T21:44:29.057Z"
    }
}
```

&nbsp;

- 400 - Bad Request _(if violates sequelize validations)_

```json
{
  "message": [
    "Name is required",
    and or
    "Description is required",
    and or
    "Category is required",
    and or
    "Price is required"
  ]
}
```

&nbsp;

### 6. GET /products/:id

_Request_:

- params

```json
{
  "id": 2
}
```

_Response_

- 200 - OK

```json
{
    "message": "Success read product with id 2",
    "product": {
        "id": 2,
        "name": "admin",
        "description": "keren",
        "price": 1200000,
        "stock": 13,
        "imgUrl": "nkfejf es",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2024-10-19T16:29:50.925Z",
        "updatedAt": "2024-10-20T11:13:28.506Z"
    }
}
```

&nbsp;

- 400 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

### 7. GET /categories

_Response_

- 200 - OK

```json
{
    "message": "Success read Category",
    "category": [
        {
            "id": 1,
            "name": "T-Shirts",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 2,
            "name": "Jeans",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 3,
            "name": "Accessories",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 4,
            "name": "Footwear",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 5,
            "name": "Outerwear",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 6,
            "name": "Activewear",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 7,
            "name": "Formal Wear",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 8,
            "name": "Bags",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 9,
            "name": "Jewelry",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 10,
            "name": "Hats",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 11,
            "name": "Sweaters",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 12,
            "name": "Shorts",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 13,
            "name": "Skirts",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 14,
            "name": "Socks",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        },
        {
            "id": 15,
            "name": "Loungewear",
            "createdAt": "2024-10-19T16:29:50.922Z",
            "updatedAt": "2024-10-19T16:29:50.922Z"
        }
    ]
}
```

### 8. POST /categories

_Request_:

- body

```json
{
  "name": "Galaxy Ring"
}
```

_Responses_:

- 200 - OK

```json
{
  "newCategory": {
    "id": 5,
    "name": "Galaxy Ring",
    "updatedAt": "2024-08-25T17:05:37.422Z",
    "createdAt": "2024-08-25T17:05:37.422Z"
  }
}
```

&nbsp;

- 400 - Bad Request (If name is empty)

```json
{
  "message": ["Name is required"]
}
```

&nbsp;

### 9. PUT /categories/:id

_Requests_:

- params

```json
{
  "id": 5
}
```

- body

```json
{
  "name": "celana bandung"
}
```

_Responses_:

```json
{
    "message": "Success edit Category",
    "category": [
        1
    ]
}
```

&nbsp;

- 404 - Not Found _(if category with id < params > doesn't exist in database)_

```json
{
  "message": "Category not found"
}
```

&nbsp;




&nbsp;

## Authentication & Authorization required _(admin or staff who is the author of the product)_

### 11. PUT /products/:id

_Request_:

- body

```json
{
  "name": "CelanaTest",
  "description": "Celana berbahan sangat lembut",
  "price": 120000,
  "stock": 13,
  "imgUrl": "example.jpg",
  "categoryId": 2
}
```

_Responses_:

- 200 - OK

```json
{
    "message": "Success edit product by id 5",
    "products": {
        "id": 5,
        "name": "CelanaTest",
        "description": "Celana berbahan sangat lembut",
        "price": 120000,
        "stock": 13,
        "imgUrl": "example.jpg",
        "categoryId": 2,
        "authorId": 1,
        "createdAt": "2024-10-19T16:29:50.925Z",
        "updatedAt": "2024-10-20T21:52:06.978Z"
    }
}
```

&nbsp;

Error 400 - Bad Request will be appeared if violates sequelize validations as like POST /products

&nbsp;

- 404 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Data not found"
}
```

```json
{
  "message": "You aren`t the author of this product"
}
```

&nbsp;

### 12. PATCH /products/:id

_Requests_:

- params

```json
{
  "id": 2
}
```

- body

```json
{
  "imgUrl": "< image file upload >"
}
```

_Response_ :

- 200 - OK

```json
{
    "message": "Success upload ImgURL",
    "result": {
        "fileId": "67157d15e375273f60189b7e",
        "name": "Photo_on_22-09-24_at_19.05_v_O3diwAP.jpeg",
        "size": 170177,
        "versionInfo": {
            "id": "67157d15e375273f60189b7e",
            "name": "Version 1"
        },
        "filePath": "/Photo_on_22-09-24_at_19.05_v_O3diwAP.jpeg",
        "url": "https://ik.imagekit.io/raffles16/Photo_on_22-09-24_at_19.05_v_O3diwAP.jpeg",
        "fileType": "image",
        "height": 960,
        "width": 1440,
        "thumbnailUrl": "https://ik.imagekit.io/raffles16/tr:n-ik_ml_thumbnail/Photo_on_22-09-24_at_19.05_v_O3diwAP.jpeg",
        "AITags": null
    }
}
```

&nbsp;

- 400 - Bad Request _(if no file uploaded)_

```json
{
  "message": "imgUrl is required"
}
```

- 404 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Data not found"
}
```

- 403 - Forbidden _(if not admin or staff who is not the author of the product)_

```json
{
  "message": "You aren`t the author of this product"
}
```

&nbsp;

### 13. DELETE /products/:id

_Request_:

- params

```json
{
  "id": 12
}
```

_Responses_:

```json
{
    "message": "Success delete product by id 12"
}
```

&nbsp;

- 404 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Data not found"
}
```

- 403 - Forbidden _(if not admin or staff who is not the author of the product)_

```json
{
  "message": "You aren`t the author of this product"
}
```

&nbsp;

## Authentication & Authorization required _(admin only)_

### 14. POST /add-user

_Request_:

- body

```json
{
  "username": "test",
  "email": "mamang12@gmail.com",
  "password": "123456789",
  "phoneNumber": "123456789",
  "address": "Jakarta"
}
```

_Responses_:

- 201 - Created

```json
{
    "message": "Success create new user",
    "user": {
        "role": "Staff",
        "id": 24,
        "username": "test",
        "email": "mamang12@gmail.com",
        "password": "$2a$10$eKTu/V5aWHxisF4sgLjw/OdPE.EX7l30sH7wREkaEbrvEayys3HjW",
        "phoneNumber": "123456789",
        "address": "Jakarta",
        "updatedAt": "2024-10-20T22:03:39.523Z",
        "createdAt": "2024-10-20T22:03:39.523Z"
    }
}
```

&nbsp;

- 400 - Bad Request _(if email is empty or already used)_

```json
{
    "message": [
        "email is required"
    ]
}
  or
  {
    "message": "email must be unique"
}
```

- 400 - Bad Request _(if password is empty)_

```json
{
  "message": "Password is required"
}
```

- 403 - Forbidden _(if not admin)_

```json
{
  "message": "You have no access"
}
```

&nbsp;

## Global Errors

Authentication errors _(endpoint 4 - 14)_:

If has not logged in yet

- 401 - Unauthorized

```json
{
  "message": "Please login first"
}
```

If access token is invalid

- 401 - Unauthorized

```json
{
  "message": "Please login first"
}
```

&nbsp;

Other unexpected error _(all endpoints)_:

- 500 - Internal Server Error

```json
{
  "message": "Internal Server Error"
}
```