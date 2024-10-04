# <span style="font-size: 36px;">💬</span> MERN Real-Time Chat Application Backend

## <span style="font-size: 28px;">📜</span> Overview

This repository contains the backend for the **MERN Real-Time Chat Application**. Built with **Node.js** and **Express**, this backend serves as the API for handling user authentication, managing chat messages, and facilitating real-time communication through **Socket.IO**.

> **Note:** This project is created for educational purposes to demonstrate how to build a backend for a real-time chat application using the MERN stack.

- **Frontend Repository**: Check out the frontend here: [MERN Real-Time Chat App Frontend](https://github.com/Sanjay-k-m/mern-realtime-chat-app-frontend)

## <span style="font-size: 28px;">🚀</span> Features

- **User Authentication**: Secure registration and login using JWT (JSON Web Tokens).
- **Real-Time Messaging**: Instant message delivery through **Socket.IO**.
- **Database Integration**: Utilizes **MongoDB** for storing user data and chat messages.
- **CORS Support**: Configured to allow cross-origin requests for frontend communication.
- **Environment Configuration**: Uses **dotenv** for managing environment variables.

## <span style="font-size: 28px;">🛠</span> Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Socket.IO**: Library for real-time web applications.
- **JWT**: For secure authentication.
- **dotenv**: For environment variable management.

## <span style="font-size: 28px;">📦</span> Installation & Setup

### Prerequisites

- **Node.js** and **npm** installed.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sanjay-k-m/mern-realtime-chat-app-backend.git
   cd mern-realtime-chat-app-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:
   Copy the provided `.env.example` to a new file named `.env` and update the necessary values:
   ```bash
   cp .env.example .env
   ```

4. **Run the server**:
   ```bash
   npm run dev
   ```

5. **The server will start on** [http://localhost:5000](http://localhost:5000).

## <span style="font-size: 28px;">🔧</span> Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the server in development mode using **nodemon**.
- **`npm run start`**: Starts the server for production.
- **`npm run build`**: Installs frontend dependencies and builds the frontend.

## <span style="font-size: 28px;">🔗</span> Key Dependencies

- **Express**: v4.18.2
- **Mongoose**: v8.1.1
- **Socket.IO**: v4.7.4
- **bcryptjs**: v2.4.3
- **jsonwebtoken**: v9.0.2
- **dotenv**: v16.4.1
- **Nodemon**: v3.0.3 (for development)

## <span style="font-size: 28px;">📚</span> Purpose

This backend project is developed to facilitate the MERN Real-Time Chat Application. It provides the necessary endpoints for user authentication and real-time messaging functionalities, showcasing how to build a scalable backend with the MERN stack.

## <span style="font-size: 28px;">🤝</span> Contributing

Contributions are welcome! If you'd like to contribute, feel free to fork the repository, make your changes, and submit a pull request.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## <span style="font-size: 28px;">📧</span> Contact

- **Sanjay K M**: dev.sanjaykm@outlook.com
- **GitHub**: [https://github.com/Sanjay-k-m](https://github.com/Sanjay-k-m)
