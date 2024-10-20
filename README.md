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
    "result": {
        "total": 23,
        "size": 10,
        "totalPage": 3,
        "currentPage": 1,
        "data": [
            {
                "id": 1,
                "name": "Basic Cotton T-Shirt",
                "description": "Comfortable cotton t-shirt available in various colors.",
                "price": 199000,
                "stock": 50,
                "imgUrl": "https://example.com/products/tshirt1.jpg",
                "categoryId": 1,
                "authorId": 1,
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
            },
            {
                "id": 2,
                "name": "Slim Fit Jeans",
                "description": "Stylish slim fit jeans with modern cut.",
                "price": 299000,
                "stock": 30,
                "imgUrl": "https://example.com/products/jeans1.jpg",
                "categoryId": 2,
                "authorId": 1,
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
            },
            {
                "id": 3,
                "name": "Leather Jacket",
                "description": "Genuine leather jacket with a modern look.",
                "price": 799000,
                "stock": 15,
                "imgUrl": "https://example.com/products/jacket1.jpg",
                "categoryId": 3,
                "authorId": 2,
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
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
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
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
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
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
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
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
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
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
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
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
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
            },
            {
                "id": 10,
                "name": "Sunglasses",
                "description": "UV protected stylish sunglasses.",
                "price": 259000,
                "stock": 45,
                "imgUrl": "https://example.com/products/sunglasses1.jpg",
                "categoryId": 10,
                "authorId": 5,
                "createdAt": "2024-10-20T19:44:36.862Z",
                "updatedAt": "2024-10-20T19:44:36.862Z"
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
  "search": "5G",
  "sort": "DESC",
  "filter": {
    "category": "3,4"
  }
}
```

_Response_:

- 200 - OK

```json
{
  "search": "5G",
  "sort": "DESC",
  "filter": {
    "category": "3,4"
  },
  "total": 9,
  "data": [
    {
      "id": 4,
      "name": "SAMSUNG Galaxy A35 5G",
      "description": "128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Rugged Design, US Version, 2024, Awesome Lilac",
      "price": 5000000,
      "stock": 164,
      "imgUrl": "https://m.media-amazon.com/images/I/71lw4ZWUfYL._AC_SL1500_.jpg",
      "categoryId": 3,
      "authorId": 2,
      "createdAt": "2024-08-22T15:25:58.291Z",
      "updatedAt": "2024-08-22T15:25:58.291Z",
      "User": {
        "id": 2,
        "username": "rizkyhidayat",
        "email": "rizkyhidayat@gmail.com",
        "role": "Staff",
        "phoneNumber": "088888888888",
        "address": "BSD",
        "createdAt": "2024-08-22T15:25:58.163Z",
        "updatedAt": "2024-08-22T15:25:58.163Z"
      }
    }
    ...
  ]
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
  "currentPage": 2,
  "size": 10,
  "totalPage": 2,
  "total": 20,
  "data": [
    {
      "id": 11,
      "name": "SAMSUNG Galaxy A52s 5G",
      "description": "128GB Unlocked Android Smartphone, 64MP Quad Camera, IP67 Water Resistance, Super AMOLED Display, 2024, Awesome White",
      "price": 5200000,
      "stock": 180,
      "imgUrl": "https://m.media-amazon.com/images/I/71KZfQA-Y7L._AC_SL1500_.jpg",
      "categoryId": 3,
      "authorId": 2,
      "createdAt": "2024-08-22T15:25:58.291Z",
      "updatedAt": "2024-08-22T15:25:58.291Z",
      "User": {
        "id": 2,
        "username": "rizkyhidayat",
        "email": "rizkyhidayat@gmail.com",
        "role": "Staff",
        "phoneNumber": "088888888888",
        "address": "BSD",
        "createdAt": "2024-08-22T15:25:58.163Z",
        "updatedAt": "2024-08-22T15:25:58.163Z"
      }
    },
    ...
  ]
}
```

&nbsp;

### 2. GET /pub/products/:id

_Request_:

- params

```json
{
  "id": 2
}
```

_Responses_

- 200 - OK

```json
{
  "product": {
    "id": 2,
    "name": "SAMSUNG Galaxy S23 FE",
    "description": "AI Phone, 128GB Unlocked Android Smartphone, Long Battery Life, Premium Processor, Tough Gorilla Glass Display, Hi-Res 50MP Camera, US Version, 2023, Mint",
    "price": 7800000,
    "stock": 164,
    "imgUrl": "https://m.media-amazon.com/images/I/710wVcdWVQL._AC_UF894,1000_QL80_FMwebp_.jpg",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2024-08-21T15:15:07.330Z",
    "updatedAt": "2024-08-21T15:15:07.330Z"
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
  "emailOrUsername": "string",
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
  "message": "Invalid login"
}
```

- 401 - Unauthorized _(if email or username or password is wrong)_

```json
{
  "message": "Invalid username or email or password"
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
  "total": 20,
  "data": [
    {
      "id": 1,
      "name": "SAMSUNG Galaxy S24 Ultra",
      "description": "256GB AI Smartphone, Unlocked Android, 50MP Zoom Camera, Long Battery Life, S Pen, US Version, 2024, Titanium Gray",
      "price": 16400000,
      "stock": 164,
      "imgUrl": "https://m.media-amazon.com/images/I/71-EnPs+uQL._AC_SL1500_.jpg",
      "categoryId": 1,
      "authorId": 1,
      "createdAt": "2024-08-22T15:25:58.291Z",
      "updatedAt": "2024-08-22T15:25:58.291Z",
      "User": {
          "id": 1,
          "username": "geraldsimanullang",
          "email": "geraldsimanullang@gmail.com",
          "role": "Admin",
          "phoneNumber": "081772888548",
          "address": "Rawa Buntu Utara",
          "createdAt": "2024-08-22T15:25:58.061Z",
          "updatedAt": "2024-08-22T15:25:58.061Z"
      }
    },
    ...
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
  "name": "SAMSUNG Galaxy A25 5G",
  "description": "128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Stereo Speakers, US Version, 2024, Black",
  "price": 3900000,
  "stock": 200,
  "imgUrl": "https://m.media-amazon.com/images/I/61cwMOVn17L._AC_SL1500_.jpg",
  "categoryId": 3
}
```

_Responses_:

- (201 - Created)

```json
{
  "newProduct": {
    "id": 21,
    "name": "SAMSUNG Galaxy A25 5G",
    "description": "128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Stereo Speakers, US Version, 2024, Black",
    "price": 3900000,
    "stock": 200,
    "imgUrl": "https://m.media-amazon.com/images/I/61cwMOVn17L._AC_SL1500_.jpg",
    "categoryId": 3,
    "authorId": 1,
    "updatedAt": "2024-08-25T15:55:51.183Z",
    "createdAt": "2024-08-25T15:55:51.183Z"
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
    "Price is required", 
    or 
    "Minimum price is Rp. 1.000.000",
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
  "product": {
    "id": 2,
    "name": "SAMSUNG Galaxy S23 FE",
    "description": "AI Phone, 128GB Unlocked Android Smartphone, Long Battery Life, Premium Processor, Tough Gorilla Glass Display, Hi-Res 50MP Camera, US Version, 2023, Mint",
    "price": 7800000,
    "stock": 164,
    "imgUrl": "https://m.media-amazon.com/images/I/710wVcdWVQL._AC_UF894,1000_QL80_FMwebp_.jpg",
    "categoryId": 1,
    "authorId": 1,
    "createdAt": "2024-08-21T15:15:07.330Z",
    "updatedAt": "2024-08-21T15:15:07.330Z"
  }
}
```

&nbsp;

- 400 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Product not found"
}
```

&nbsp;

### 7. GET /categories

_Response_

- 200 - OK

```json
{
  "categories": [
    {
      "id": 1,
      "name": "Galaxy S Series",
      "createdAt": "2024-08-21T15:15:07.278Z",
      "updatedAt": "2024-08-21T15:15:07.278Z"
    },
    {
      "id": 2,
      "name": "Galaxy Z Series",
      "createdAt": "2024-08-21T15:15:07.278Z",
      "updatedAt": "2024-08-21T15:15:07.278Z"
    },
    {
      "id": 3,
      "name": "Galaxy A Series",
      "createdAt": "2024-08-21T15:15:07.278Z",
      "updatedAt": "2024-08-21T15:15:07.278Z"
    },
    {
      "id": 4,
      "name": "Galaxy M Series",
      "createdAt": "2024-08-21T15:15:07.278Z",
      "updatedAt": "2024-08-21T15:15:07.278Z"
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
  "name": "Galaxy Watch"
}
```

_Responses_:

```json
{
  "updatedCategory": [
    {
      "id": 5,
      "name": "Galaxy Watch",
      "createdAt": "2024-08-25T17:05:37.422Z",
      "updatedAt": "2024-08-25T17:14:31.026Z"
    }
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

### 10. DELETE /categories:id

_Request_:

- params

```json
{
  "id": 5
}
```

_Responses_:

```json
{
  "message": "Galaxy Watch success to delete"
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

## Authentication & Authorization required _(admin or staff who is the author of the product)_

### 11. PUT /products/:id

_Request_:

- body

```json
{
  "name": "SAMSUNG Galaxy A25 5G",
  "description": "128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Stereo Speakers, US Version, 2024, Black",
  "price": 3900000,
  "stock": 155,
  "imgUrl": "https://m.media-amazon.com/images/I/61cwMOVn17L._AC_SL1500_.jpg",
  "categoryId": 3
}
```

_Responses_:

- 200 - OK

```json
{
  "updatedProduct": [
    {
      "id": 10,
      "name": "SAMSUNG Galaxy A25 5G",
      "description": "128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Stereo Speakers, US Version, 2024, Black",
      "price": 3800000,
      "stock": 155,
      "imgUrl": "https://m.media-amazon.com/images/I/61cwMOVn17L._AC_SL1500_.jpg",
      "categoryId": 3,
      "authorId": 1,
      "createdAt": "2024-08-21T15:15:07.330Z",
      "updatedAt": "2024-08-25T18:18:27.576Z"
    }
  ]
}
```

&nbsp;

Error 400 - Bad Request will be appeared if violates sequelize validations as like POST /products

&nbsp;

- 404 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Product not found"
}
```

```json
{
  "message": "You are not the author of this product"
}
```

&nbsp;

### 12. PATCH /products/:id

_Requests_:

- params

```json
{
  "id": 3
}
```

- body

```json
{
  "image": "< image file upload >"
}
```

_Response_ :

- 200 - OK

```json
{
  "message": "Image SAMSUNG Galaxy Z Fold 6 success to update"
}
```

&nbsp;

- 400 - Bad Request _(if no file uploaded)_

```json
{
  "message": "Image is required"
}
```

- 404 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Product not found"
}
```

- 403 - Forbidden _(if not admin or staff who is not the author of the product)_

```json
{
  "message": "You are not the author of this product"
}
```

&nbsp;

### 13. DELETE /products/:id

_Request_:

- params

```json
{
  "id": 20
}
```

_Responses_:

```json
{
  "message": "SAMSUNG Galaxy A14 5G success to delete"
}
```

&nbsp;

- 404 - Not Found _(if product with id < params > doesn't exist in database)_

```json
{
  "message": "Product not found"
}
```

- 403 - Forbidden _(if not admin or staff who is not the author of the product)_

```json
{
  "message": "You are not the author of this product"
}
```

&nbsp;

## Authentication & Authorization required _(admin only)_

### 14. POST /add-user

_Request_:

- body

```json
{
  "username": "natasyathalia",
  "email": "natasyathalia@gmail.com",
  "phoneNumber": "088888888888",
  "address": "Jl. Nowhere No. 1"
}
```

_Responses_:

- 201 - Created

```json
{
  "newUserWithoutPassword": {
    "id": 4,
    "username": "natasyathalia",
    "email": "natasyathalia@gmail.com",
    "role": "Staff",
    "phoneNumber": "088888888888",
    "address": "Jl. Nowhere No. 1",
    "createdAt": "2024-08-25T17:48:30.109Z",
    "updatedAt": "2024-08-25T17:48:30.109Z"
  }
}
```

&nbsp;

- 400 - Bad Request _(if email is empty or already used)_

```json
{
  "message": ["Email is required"],
  or
  "messsage": ["Email is already used"]
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
  "message": "Only admin can add new user"
}
```

&nbsp;

## Global Errors

Authentication errors _(endpoint 4 - 14)_:

If has not logged in yet

- 401 - Unauthorized

```json
{
  "message": "Please log in first"
}
```

If access token is invalid

- 401 - Unauthorized

```json
{
  "message": "Please log in again"
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