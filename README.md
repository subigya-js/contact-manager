# My Contacts Backend API

This is an Express.js project for a contacts management backend API.

## Description

My Contacts Backend API is a RESTful service that allows users to manage their contacts. It provides endpoints for creating, reading, updating, and deleting contact information.

## Features

- CRUD operations for contacts
- Express.js server
- MongoDB database integration
- Error handling middleware

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv (for environment variables)
- express-async-handler (for handling asynchronous errors)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/subigya-js/contact-manager.git
   ```
2. Navigate to the project directory:
   ```
   cd contact-manager
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

## Configuration

The application uses environment variables for configuration. Create a `.env` file in the root directory with the following variables:

```
PORT=3000 # or your preferred port
MONGODB_URI=your_mongodb_connection_string
```

## Usage

To start the server in development mode:

```
npm run dev
```

To start the server in production mode:

```
npm start
```

The server will start on the port specified in your `.env` file (default is 3000).

## API Endpoints

The API provides the following endpoints:

- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/:id` - Get a specific contact by ID
- `PUT /api/contacts/:id` - Update a specific contact by ID
- `DELETE /api/contacts/:id` - Delete a specific contact by ID

Note: Replace `/api/contacts` with the actual base path of your API if it's different.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
