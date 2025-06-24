//slide 17
//imports the express library - our web framework
const express = require("express");
const mysql = require('mysql2');
//creates an express application instance
const app = express();
//define the port number where our server will listen for requests
const PORT = 3000; //you can use a different port number just ensure it is not inuse by another application

app.use(express.json());

// link to mysql
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'AlexMysql1!',
  database: 'social',
  waitForConnections: true,
  connectionLimit: 10,
});

//start the server and make it listen to a specific port
//callback function runs when server successsfully starts
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});


//slide 19
//get a route for the route path
//when someone visits your localhost this function will execute
app.get("/users", (_req, res) => {
  const sql = 'SELECT * FROM users';
  pool.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching users: ', error.message);
    }
    res.status(200).json(results); //responds with the list of users
  })
})


//slide 25
//create a put route to update an existing user
//are used to update or modify existing resources
app.put("/update-user/:id", (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.json({ message: `user ${userId} updated`, updatedData: updatedData });
});

//slide 26
//delete route to remove user
// are used to remove or delete resources from the server
app.delete("/delete-user/:id", (req, res) => {
  const userId = req.params.id; //tells us which user should be deleted
  res.json({ message: `user ${userId} deleted` });
});

//slide 30
//Create a post route with validation and proper error handling
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
    }
  );
});
