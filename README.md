# Notes and To-Do API Backend

A RESTful backend API built using Node.js, Express.js, MongoDB, JWT, and bcryptjs. This project provides secure user authentication and CRUD operations for Notes and To-Do Tasks.

## Features

- User Registration
- User Login
- Password hashing using bcryptjs
- JWT-based authentication
- Protected API routes
- Notes CRUD operations
- To-Do Tasks CRUD operations
- MongoDB database integration
- Environment variables using dotenv
- CORS support
- API testing using Postman
- Nodemon for development

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- CORS
- Postman
- Nodemon

## Project Structure

```text
full-stack-w2-assignment/
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Note.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   ├── noteRoutes.js
│   └── taskRoutes.js
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── server.js
