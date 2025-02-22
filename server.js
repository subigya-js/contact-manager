const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data (POST Request)
app.use(express.json());

// Creating middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log("Server running at port:", port);
});
