# Simple MERN Todo App

## Description

This is a basic Todo application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create, read, update, and delete tasks.

## Features

- Add new tasks
- View tasks
- Mark tasks as completed
- Edit tasks
- Delete tasks

## Technologies Used

- MongoDB: Database to store tasks and user information
- Express.js: Backend framework for handling HTTP requests and routes
- React.js: Frontend library for building user interfaces
- Node.js: JavaScript runtime for the backend
- Mongoose: MongoDB object modeling tool for Node.js
- Axios: Promise-based HTTP client for making requests to the backend

## Installation

1. Clone the repository:
   ```
   git clone  https://github.com/KashifKhn/MERN_TODO.git
   ```
2. Install dependencies for both the client and server:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ``
   ```
3. Start the backend server:
   ```
   cd server
   npm install
   npm start
   npm run dev (if nodemon installed)
   ```
4. Start the React development server:
   ```
   cd client
   npm install
   npm run dev
   ```
5. Access the Todo app at `http://localhost:5173` in your browser.

## Usage

1. Write your task and add it.
2. Click on a task to mark it as completed or edit/delete it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
