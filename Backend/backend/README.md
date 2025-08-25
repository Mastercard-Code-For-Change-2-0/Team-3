# Backend Documentation

## Overview
This is the backend part of the MERN stack application. It is built using Node.js, Express, and MongoDB. The backend handles user-related operations and serves as an API for the frontend application.

## Project Structure
- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the logic for handling user-related requests.
    - `userController.js`: Manages user operations such as creating, retrieving, and updating users.
  - **models/**: Contains the Mongoose models for the application.
    - `user.js`: Defines the schema for user data.
  - **routes/**: Contains the route definitions for the application.
    - `userRoutes.js`: Sets up the routes for user-related endpoints.
  - `app.js`: The entry point of the application, sets up the Express server and middleware.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd my-mern-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:5000` by default.

## API Endpoints
- `POST /api/users`: Create a new user.
- `GET /api/users/:id`: Retrieve a user by ID.
- `PUT /api/users/:id`: Update a user by ID.

## Dependencies
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.

## License
This project is licensed under the MIT License.