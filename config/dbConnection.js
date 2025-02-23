const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("Attempting to connect to database...");
    console.log("Connection string:", process.env.CONNECTION_STRING);
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.error("Database connection error:", error);
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    if (error.name === 'MongoParseError') {
      console.error("Invalid connection string. Please check your CONNECTION_STRING in the .env file.");
    }
    // If there is any error, simply exit.
    process.exit(1);
  }
};

module.exports = connectDb;
