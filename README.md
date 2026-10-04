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
```

## API Endpoints

### Authentication

#### Register User

```text
POST /api/auth/register
```

#### Login User

```text
POST /api/auth/login
```

### Notes

#### Create Note

```text
POST /api/notes
```

#### Get All Notes

```text
GET /api/notes
```

#### Update Note

```text
PUT /api/notes/:id
```

#### Delete Note

```text
DELETE /api/notes/:id
```

### Tasks

#### Create Task

```text
POST /api/tasks
```

#### Get All Tasks

```text
GET /api/tasks
```

#### Update Task

```text
PUT /api/tasks/:id
```

#### Delete Task

```text
DELETE /api/tasks/:id
```

## Authentication

Protected Notes and Tasks APIs require a JWT token.

Add the token in the request header:

```text
Authorization: Bearer <your-token>
```

The token is received after successful user login.

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Do not upload the `.env` file to GitHub.

## Installation

Clone the repository:

```bash
git clone https://github.com/Meenu1012/SkillNexis-Week-2-Full-Stack-Assignment.git
```

Go to the project folder:

```bash
cd SkillNexis-Week-2-Full-Stack-Assignment
```

Install dependencies:

```bash
npm install
```

Create the `.env` file and add your MongoDB connection string and JWT secret.

## Run the Server

Start the server:

```bash
node server.js
```

For development using Nodemon:

```bash
npm run dev
```

The server runs on:

```text
http://localhost:5000
```

## Testing

The APIs were tested using **Postman** for:

- User registration
- User login
- JWT authentication
- Invalid JWT rejection
- Notes CRUD
- Tasks CRUD
- Protected routes
- MongoDB connection

### Notes CRUD Tested

- Create Note
- Get Notes
- Update Note
- Delete Note

### Tasks CRUD Tested

- Create Task
- Get Tasks
- Update Task
- Delete Task

### Security Testing

Protected routes were tested with:

- No JWT token
- Invalid JWT token
- Valid JWT token

Invalid or missing tokens are rejected by the authentication middleware.

## Database

MongoDB is used to store:

- User information
- Notes
- Tasks

Mongoose is used for MongoDB database operations and schema management.

## Security

- Passwords are hashed using bcryptjs.
- JWT is used for authentication.
- Protected routes require a valid JWT token.
- Environment variables are used for sensitive configuration.
- `.env` is excluded from GitHub using `.gitignore`.

## Project Status

The backend APIs are implemented and tested successfully using Postman.

The following features have been verified:

- User Registration
- User Login
- JWT Authentication
- Notes CRUD
- Tasks CRUD
- Protected Routes
- Invalid Token Handling
- MongoDB Connection

## Author

**Meenakshi Muthakani**

GitHub: [Meenu1012](https://github.com/Meenu1012)
