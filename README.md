# Notes and To-Do API Backend

A RESTful backend API built using Node.js, Express.js, MongoDB, and JWT authentication.

## Features

- User registration
- User login
- Password hashing using bcryptjs
- JWT authentication
- Protected API routes
- Notes CRUD operations
- To-Do/Task CRUD operations
- MongoDB database integration
- CORS support
- Environment variables
- Nodemon development server

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- dotenv
- CORS
- Nodemon

## API Endpoints

### Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Login and receive JWT token

### Notes

POST /api/notes - Create a note

GET /api/notes - Get all notes

GET /api/notes/:id - Get one note

PUT /api/notes/:id - Update a note

DELETE /api/notes/:id - Delete a note

### Tasks

POST /api/tasks - Create a task

GET /api/tasks - Get all tasks

PUT /api/tasks/:id - Update a task

DELETE /api/tasks/:id - Delete a task

## Authentication

Protected routes require a JWT token.

Authorization header:

Bearer YOUR_JWT_TOKEN

## Installation

Install dependencies:

npm install

Create a .env file with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

## Run the Project

Development:

npm run dev

Normal:

npm start

Server:

http://localhost:5000

## Testing

The API was tested for:

- User registration
- User login
- JWT authentication
- Invalid JWT rejection
- Notes CRUD
- Tasks CRUD
- Protected routes
- MongoDB connection

## Security

- Passwords are hashed before storing.
- JWT is used for authentication.
- Notes and tasks are associated with the authenticated user.
- Protected routes reject requests without valid authentication tokens.

## Author

Meenakshi Muthakani