const express = require("express");
const app = express();
const mongoose = require("mongoose");


// Import Routes

const authRoute = require("./routes/auth");

// Establish database connection
mongoose.connect("mongodb://localhost/bonappetit",
 { useNewUrlParser: true },
 () => console.log("Connection to DB Successful!")
  );


// Middleware
app.use(express.json());


// Route Middleware

app.use("/api/user", authRoute);






app.listen(3000, ()=> console.log("Server is running..."));

