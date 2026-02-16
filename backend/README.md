# API Versioning System - Backend

## Overview

A robust and secure Node.js backend API for managing project versions. This system enables developers to efficiently manage multiple versions of their APIs/services, ensuring users can access compatible versions without facing breaking changes or compatibility issues.

Built with **Express.js**, **MongoDB**, and modern backend best practices including security, rate limiting, and comprehensive logging.

---

## ✨ Features

- **Version Management**: Track and manage multiple versions of your API
- **Security**:
  - Helmet.js for secure HTTP headers
  - CORS protection
  - Rate limiting (100 requests per 10 minutes per IP)
- **Database**: MongoDB integration with Mongoose ODM
- **Logging**: HTTP request logging with Morgan
- **Input Validation**: Joi schema validation
- **Code Quality**: ESLint and Prettier for code consistency
- **Testing**: Jest testing framework with Supertest for API testing
- **Documentation**: Swagger/OpenAPI integration support
- **Environment Configuration**: Dotenv for secure environment variable management

---

## 📁 Project Structure

```
backend/
├── server.js              # Entry point - starts the Express server
├── package.json           # Project dependencies and scripts
├── .env                   # Environment variables (local configuration)
├── README.md              # Project documentation
└── src/
    ├── app.js             # Express app configuration with middleware
    └── db/
        └── db.js          # MongoDB connection setup
```

---

## 🛠️ Tech Stack

| Category          | Technology                  |
| ----------------- | --------------------------- |
| **Runtime**       | Node.js                     |
| **Framework**     | Express.js 5.x              |
| **Database**      | MongoDB with Mongoose 9.x   |
| **Validation**    | Joi                         |
| **Security**      | Helmet, CORS, Rate Limiting |
| **Logging**       | Morgan                      |
| **Testing**       | Jest, Supertest             |
| **Code Quality**  | ESLint, Prettier            |
| **Documentation** | Swagger/OpenAPI             |
| **Environment**   | Dotenv                      |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** - Either:
  - [Local MongoDB](https://www.mongodb.com/try/download/community)
  - [MongoDB Atlas Cloud](https://www.mongodb.com/cloud/atlas) (Recommended)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/API-Versioning-System.git
cd API-Versioning-System/backend
```

### 2. Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=3000

# Database Configuration
MONGO_URI=mongodb://localhost:27017/api-versioning

# Node Environment
NODE_ENV=development
```

**Configuration Details:**

| Variable    | Default                         | Description               |
| ----------- | ------------------------------- | ------------------------- |
| `PORT`      | 3000                            | Server port               |
| `MONGO_URI` | mongodb://localhost:27017/local | MongoDB connection string |
| `NODE_ENV`  | development                     | Node environment          |

---

## 📦 Running the Project

### Development Mode (with auto-reload)

```bash
npm run dev
```

This uses **Nodemon** to automatically restart the server when files change.

### Production Mode

```bash
npm start
```

Runs the server in production mode.

### Output

When the server starts successfully, you should see:

```
MongoBD connected successfully
Server is running on port 3000
```

---

## 🧪 Testing & Code Quality

### Run Tests

```bash
npm test
```

Executes all Jest test suites.

### Lint Code

```bash
npm run lint
```

Checks code for style issues using ESLint.

### Format Code

```bash
npm run format
```

Automatically formats code using Prettier.

---

## 🔐 Middleware & Security

The application includes the following middleware:

1. **Helmet**: Secures Express apps by setting various HTTP headers
2. **CORS**: Enables Cross-Origin Resource Sharing
3. **Rate Limiting**: Restricts requests to 100 per 10 minutes per IP
4. **Morgan**: Logs HTTP requests in 'dev' format
5. **Express JSON Parser**: Handles JSON request bodies

---

## 📡 API Endpoints

Currently, the application has a basic health check:

```
GET /
Response: "Hello world!"
```

Add your versioning endpoints as needed following REST conventions.

---

## 🐛 Error Handling

- **Port Not Defined**: Application will not start if `PORT` is missing in environment variables
- **Database Connection**: Error messages will indicate MongoDB connection failures
- **Rate Limit Exceeded**: Returns 429 status with message: "Too many requests, please try again after 10 minutes"

---

## 📝 Development Workflow

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes** and test locally

   ```bash
   npm run dev
   npm test
   ```

3. **Format & Lint**

   ```bash
   npm run format
   npm run lint
   ```

4. **Commit Changes**

   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

5. **Push & Create Pull Request**

---

## 👥 Contributors

- **Saksham Kumar** - saksham.kumar_cs23@gla.ac.in
<!-- - **Sandeep** - sandeep.xyz_cs23@gla.ac.in -->

---

## 📄 License

This project is licensed under the **ISC License** - see LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Jest Testing Documentation](https://jestjs.io/)

---

## 🆘 Troubleshooting

### MongoDB Connection Error

- Ensure MongoDB is running locally or check your `MONGO_URI` in `.env`
- Verify network connectivity if using MongoDB Atlas

### Port Already in Use

- Change the `PORT` in `.env` to an available port

### Dependencies Installation Issues

- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

---

**Last Updated**: February 2026
