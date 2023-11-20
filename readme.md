# Node.js Backend with TypeScript, Express, and MongoDB

This is a basic Node.js backend project using TypeScript, Express, and MongoDB. It follows an MVC structure and includes CRUD (Create, Read, Update, Delete) operations for a simple User model.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/rahul7070/nowDigitalEasy.git
```

Navigate to the project directory:

```bash
npm install
```

Running the Server
To start the development server with nodemon (auto-restart on file changes), run:

```bash
npm run dev
```

The server will be running at http://localhost:3000 by default.

Routes

POST /api/users: Add a new user to the database.
Example:
POST "Content-Type: application/json" -d '{"name":"John Doe","role":"Admin","email":"john@example.com","phoneNumber":"123-456-7890"}' http://localhost:3000/api/users

GET /api/users: Get all users from the database.
Example:
curl http://localhost:3000/api/users

GET /api/users/:userId: Get a single user by ID from the database.
Example:
curl http://localhost:3000/api/users/your-user-id

DELETE /api/users/:userId: Delete a single user by ID from the database.
Example:
curl -X DELETE http://localhost:3000/api/users/your-user-id

PUT /api/users/:userId: Update a single user by ID in the database.
Example:
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Name","role":"Updated .....}
