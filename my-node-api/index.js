// import the express library - our web framework
const express = require('express');

// create an instance of an express application
const app = express();

// define port number
const PORT = 3000;

// start the server and listen on port 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

// POST route
app.use(express.json()); // Middleware to parse JSON bodies

app.post('/create-user', (req, res) => {
  const userData = req.body;

  console.log(userData); // helpful for debugging

  res.status(201).json({ 
    message: 'User created successfully', 
    user: userData 
  });
});

// put request
app.put('/update-user/:id', (req, res) => {
  const userId = req.params.id;
    const updatedData = req.body;
  res.json({ message: `User ${userId} updated successfully` });
});
