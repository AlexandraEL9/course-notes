# APIs with Node.js

---

## Contents
- [Intro to Node](#intro-to-node)
- [Setting Up a Project](#setting-up-a-project)
    - [Building an API](#building-an-api)
    - [HTTP Methods Overview](#http-methods-overview)
    - [Creating Routes in Express](#creating-routes-in-express)
        - [Basic index.js setup](#basic-indexjs-setup)
        - [POST Route (Using Postman)](#post-route-using-postman)
        - [PUT Route (Update a user)](#put-route-update-a-user)
        - [DELETE Route (Remove a user)](#delete-route-remove-a-user)
    - [HTTP Request Structure](#http-request-structure)
    - [HTTP Response Structure](#http-response-structure)
    - [HTTP Status Codes](#http-status-codes)

- [Node and APIs 2](#node-and-apis-2)
  - [Middleware in Express](#intro-to-node) 
    - [Common Middleware Use Cases](#common-middleware-usecases)
    - [Error Handling Middleware](#error-handling-middleware)
    - [Authentication vs Authorization](#authentication-vs-authorization)
  - [Integrationg API with MySQL](#integrationg-api-with-mysql)
    - [Setting Up MySQL Integration](#isetting-up-mysql-integration)
    - [Deploying Your API](#deploying-your-api)
---

## Intro to Node

**What is Node.js**
- JavaScript Runtime Environment: Runs JS on the server-side.

- Event-Driven & Asynchronous: Handles many concurrent requests efficiently.

- Cross-platform & Open-source

- Useful for building everything from simple sites to full-scale backend systems.

- Node.js is a free, open source tool that lets you run JavaScript outside the web browser.

- With Node.js, you can build fast and scalable applications like web servers, APIs, tools, and more.

**What is an API**
- API = Application Programming Interface
- A set of rules that lets software systems communicate.

*Analogy:*
- You = Client

- Waiter = API

- Kitchen = Backend server

**Why Use Node.js for APIs?**
- Asynchronous & Event-driven: Ideal for high-volume requests.

- Scalable: Designed for growth.

- High Performance: Uses V8 engine.

- Large Ecosystem: Libraries like Express.js.

- JavaScript Everywhere: Use JS on both frontend and backend.

## Setting Up a Project

1. Initialize the project
```bash
mkdir my-node-api
cd my-node-api
npm init -y
```
2. Install dependencies
```bash
npm install express cors body-parser
```

3. Understanding `package.json`

    - Metadata: name, version, description.

    - Scripts: "start": "node index.js"

    - Dependencies: external libraries.

### Building an API

**What is Express.js?**
-     Lightweight framework for building APIs with Node.js.

-     Handles routing and middleware.

-     Flexible and scalable.

### HTTP Methods Overview
| Method | Use Case                  |
| ------ | ------------------------- |
| GET    | Retrieve data             |
| POST   | Create a resource         |
| PUT    | Update/replace a resource |
| DELETE | Remove a resource         |

### Creating Routes in Express

#### Basic index.js setup:
```js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

**Start the server:
```js
npm start
```

#### POST Route (Using Postman)
```js
app.post('/create-user', (req, res) => {
  const user = req.body;
  console.log(user);
  res.status(201).json({ message: 'User created successfully' });
});
```

**Test with Postman:**
- Set method to POST

- URL: http://localhost:3000/create-user

- Body → raw → JSON:
```json
{
  "id": 1,
  "name": "Your Name"
}
```
*Expected response:*
- Status: 201 Created

- Message: "User created successfully"

#### PUT Route (Update a user)
```js
app.put('/update-user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} updated successfully` });
});
```

#### DELETE Route (Remove a user)
```js
app.delete('/delete-user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} deleted successfully` });
});
```

### HTTP Request Structure
- Method: GET, POST, etc.

- URL: /api/user/1

- Headers: e.g., Content-Type: application/json

- Body: Data sent with the request (for POST/PUT)

### HTTP Response Structure
- Status Code: e.g., 200, 404

- Headers: Metadata like Content-Type

- Body: Data returned (JSON, HTML, etc.)

### HTTP Status Codes
| Code                          | Meaning                |
| ----------------------------- | ---------------------- |
| **200 OK**                    | Request succeeded      |
| **201 Created**               | Resource created       |
| **400 Bad Request**           | Malformed request      |
| **401 Unauthorized**          | Auth required          |
| **404 Not Found**             | Resource doesn't exist |
| **500 Internal Server Error** | Server error           |
| **503 Service Unavailable**   | Temporary outage       |

---

## Node and APIs 2

### Middleware in Express


#### What is Middleware?
Middleware functions run during the request-response lifecycle and can:

- Request Interception: Intercept & modify requests
- Add or modify responses
- Control request flow or handle errors

```js
// Example middleware
app.use(express.json()); // Parse JSON in request body
```

#### Common Middleware Use Cases

- Logging (e.g. morgan)
- Authentication & Authorization
- Error Handling
- Request Body Parsing
- Security (e.g. cors, rate limiting)

**Examples**

```bash
npm install morgan
```
```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

#### Error Handling Middleware
Centralised error handler:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
```
*500 = Internal Server Error*

#### Authentication vs Authorization

- Authentication: Confirms/ verifies identity (e.g., login- username and password)

- Authorization: Confirms access rights/ what you're allowed to do (e.g., admin vs user)

on a shop site you may use authentication to access certain info/ features like your own personal wishlist/ order history but that doesn't mean you can access, say, the database in the back end/ add prodicts etc.

**Example:** A logged-in user (authenticated) may not have permission to delete users (authorized).

### Integrating API with MySQL

**MySQL vs MongoDB**
| Feature   | MySQL                         | MongoDB                      |
| --------- | ----------------------------- | ---------------------------- |
| Type      | Relational (SQL)              | NoSQL (Document)             |
| Schema    | Fixed schema                  | Flexible schema              |
| Structure | Tables with rows/columns      | JSON-like documents          |
| Best for  | Complex queries, transactions | Dynamic, real-time apps      |
| Use case  | Business, finance apps        | IoT, mobile, content systems |

**Popular Full-Stack: MERN**
MongoDB + Express + React + Node.js

#### Setting Up MySQL Integration

Step 1: Install MySQL Client


#### Setting Up MySQL Integration
Step 1: Install MySQL Client
```bash
npm install mysql2
```

Step 2: Connect to MySQL in index.js
```js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'social'
});
```

### Create Users with POST Endpoint
```js
app.post('/create-user', (req, res) => {
  const { name, email, age } = req.body;

  pool.query(
    'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
    [name, email, age],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({ message: `${name} created successfully` });
    
  );
});
```

### Get All Users with GET Endpoint
```js
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json(results);
  });
});
```
Test it in browser:
```bash
http://localhost:3000/users
```

### Update User (PUT)
```js
app.put('/update-user/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, age } = req.body;

  pool.query(
    'UPDATE users SET name=?, email=?, age=? WHERE id=?',
    [name, email, age, userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Database error' });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'User not found' });

      res.status(200).json({ message: 'User updated successfully' });
    }
  );
});
```

### Delete User (DELETE)
```js
app.delete('/delete-user/:id', (req, res) => {
  const userId = req.params.id;

  pool.query(
    'DELETE FROM users WHERE id=?',
    [userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Database error' });
      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'User not found' });

      res.status(200).json({ message: 'User deleted successfully' });
    }
  );
});
```

### Deploying Your API
Make your local API public:

#### Hosting Platforms

| Platform        | Key Features                               |
| --------------- | ------------------------------------------ |
| **Heroku**      | Easiest for beginners, supports Git deploy |
| **AWS EC2**     | Flexible but requires manual setup         |
| **GCP Compute** | Similar to EC2, scalable infrastructure    |

Deployment makes your API accessible via the internet instead of localhost.