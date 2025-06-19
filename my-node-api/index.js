//slide 17
//imports the express library - our web framework
const express = require("express");
//creates an express application instance
const app = express();
//define the port number where our server will listen for requests
const PORT = 3000; //you can use a different port number just ensure it is not inuse by another application
//start the server and make it listen to a specific port
//callback function runs when server successsfully starts
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});

//slide 19
//get a route for the route path
//when someone visits your localhost this function will execute
app.get("/", (req, res) => {
  res.send("welcome to our api");
});

//slide 20
//middleware to parse json data from request bodies
//w/o this req.body would be undefined
//must be added before any routes that need to read req.body
app.use(express.json());
//create a post route path
//send data to the server to create new resources
app.post("/create-user", (req, res) => {
  const userData = req.body;
  res
    .status(201) //indicates something was created successfully
    .json({ message: "user data created successfully", user: userData }); //responds with a confirmed message
});

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
app.post("/submit-form", (req, res) => {
  //validate that required fields are present in the request
  //the ! operator means "not" - so !req.body.name means "if name doesn't exist"
  //|| means "or" - so we check if either name or email is missing
  if (!req.body.name || !req.body.email) {
    //if validation fails, return immediately with error response
    //Status 400 = "Bad Request" - client sent invalid/incomplete data
    //using 'return' prevents the rest of the function from executing
    return res.status(400).json({ error: "Name and Email are required" });
  }
  //if validation passes, send success response
  //Status 200 = "OK" - request was successful
  res.status(200).json({ message: "Form submitted successfully" });
});