# Contact Manager API

A robust RESTful API for managing contacts, built with Node.js, Express, and MongoDB.

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
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/current` - Get current user info (protected route)

### Contact Routes
- `GET /api/contacts` - Get all contacts (protected route)
- `POST /api/contacts` - Create a new contact (protected route)
- `GET /api/contacts/:id` - Get a specific contact (protected route)
- `PUT /api/contacts/:id` - Update a contact (protected route)
- `DELETE /api/contacts/:id` - Delete a contact (protected route)

## Error Handling

The API uses a centralized error handling mechanism. The `errorHandler` middleware in `middleware/errorHandler.js` catches all errors and sends appropriate error responses.

## Authentication

JWT (JSON Web Tokens) are used for authentication. The `validateTokenHandler` middleware in `middleware/validateTokenHandler.js` verifies the token for protected routes.

## Database

This project uses MongoDB as the database. The connection is managed in `config/dbConnection.js`.

## Documentation

Detailed documentation for this project can be found [here](https://docs.google.com/document/d/1EutIpSqzdE7nvemEY3Qe5BlAD7aYEXhOxC2B9Nbnri4/edit?usp=sharing). This documentation provides in-depth information about the project structure, API endpoints, authentication process, and more.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSON Web Tokens](https://jwt.io/)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

## Conclusion

This Contact Manager API provides a solid foundation for managing contacts with user authentication. It demonstrates best practices in Node.js API development, including proper route handling, middleware usage, and database integration. The project is now concluded, but feel free to extend its functionality or use it as a starting point for your own projects.
