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

---

## Intro to Node

**What is Node.js**
- JavaScript Runtime Environment: Runs JS on the server-side.

- Event-Driven & Asynchronous: Handles many concurrent requests efficiently.

- Cross-platform & Open-source

- Useful for building everything from simple sites to full-scale backend systems.

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