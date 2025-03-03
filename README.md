# Contact Manager API

This is a RESTful API for managing contacts, built with Node.js, Express, and MongoDB.

## Features

- User authentication (signup, login)
- CRUD operations for contacts
- JWT-based authentication
- Error handling middleware
- MongoDB database integration

## Project Structure

```
contact-manager/
│
├── config/
│   └── dbConnection.js
├── controllers/
│   ├── contactController.js
│   └── userController.js
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
├── models/
│   ├── contactModel.js
│   └── userModel.js
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
├── .env
├── .gitignore
├── constants.js
├── package.json
├── server.js
└── README.md
```

## Prerequisites

- Node.js (v14 or later recommended)
- MongoDB

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/subigya-js/contact-manager.git
   cd contact-manager
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=3001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3001` (or the port you specified in the .env file)

## API Endpoints

### User Routes
- POST /api/users/register - Register a new user
- POST /api/users/login - Login user
- GET /api/users/current - Get current user info (protected route)

### Contact Routes
- GET /api/contacts - Get all contacts (protected route)
- POST /api/contacts - Create a new contact (protected route)
- GET /api/contacts/:id - Get a specific contact (protected route)
- PUT /api/contacts/:id - Update a contact (protected route)
- DELETE /api/contacts/:id - Delete a contact (protected route)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
