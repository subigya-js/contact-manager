const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const connectDb = require("./config/dbConnection");

connectDb();

// Middleware for parsing JSON data (POST Request)
app.use(express.json());

// Creating middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

// Routing for User Authentication
app.use("/api/users", require("./routes/userRoutes"));

// Using built-in middleware for Error Handling
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server running at port:", port);
});
