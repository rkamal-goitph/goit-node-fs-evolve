import express from "express";

// express function is used to initialize an Express backend application
// we are creating an express application instance and assigning it to the app constant
const app = express();

// import the JSON parser middleware
app.use(express.json());

app.post("/user", (req, res) => {
  // access the request body using req.body
  const name = req.body.name;
  const email = req.body.email;

  // destructure
  // const { name, email } = req.body;

  res.send(`User created: ${name}, email: ${email}`);
});

// add a route for homepage
// BROWSERS CAN ONLY SEND GET REQUESTS BY DEFAULT WHEN SENDING THEM VIA THE URL INPUT
// routes take two parameters
// the first parameter is the path where we want to navigate
// the second parameter is the callback function
// where we can specify what we want to do in that specific route

// the callback function for express routes take two parameters
// first is the request object
// second is the response object
app.get("/", (req, res) => {
  // send method is accessible from the response object
  // this allows use to send data in the route
  //
  res.send("Hello World!");
});

// takes two parameters
// first parameter is the port number
// second parameter is the callback function
// where we can indicate the code that will run once the server is successfully started
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
