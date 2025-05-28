# 🚀 ServEase Backend — Service Sharing Web Application API

This is the backend server for **ServEase**, a service-sharing web application that allows users to manage, book, and update services. Built with Express.js and MongoDB, this RESTful API supports JWT-based authentication and secure CRUD operations.

## 📦 Features

- 🔐 **JWT Authentication**
  - Secure login/logout via cookies
  - Protected routes using middleware
- 🛠️ **Service Management**
  - Add, Update, Delete personal services
- 🛍️ **Booking System**
  - Book any service
  - View all booked services
  - Update booking status (`pending`, `working`, `completed`)
- 🔍 **Search Functionality**
  - Search services by name
- 🧪 RESTful API
  - Clean, predictable endpoints
  - Consistent JSON responses
  - Error handling with status codes

---

## 🧰 Technologies Used

| Category       | Technology                            |
| -------------- | ------------------------------------- |
| Backend        | Node.js, Express.js                   |
| Database       | MongoDB Atlas                         |
| Authentication | JWT (JSON Web Tokens)                 |
| Deployment     | Vercel                                |
| Utilities      | Mongoose, Cors, Dotenv, Cookie Parser |

---

## 🌐 Base URL

All API requests should be made to:

```
https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/
```

---

## 📥 Endpoints

### 🔐 Authentication

| Method | Route     | Description                           |
| ------ | --------- | ------------------------------------- |
| POST   | `/jwt`    | Set JWT cookie after successful login |
| GET    | `/logout` | Clear JWT cookie (logout user)        |

---

### 🛠️ Services

| Method | Route                 | Description                        |
| ------ | --------------------- | ---------------------------------- |
| POST   | `/addService`         | Add a new service                  |
| GET    | `/services`           | Get all services (supports search) |
| GET    | `/serviceDetails/:id` | Get details of a single service    |
| PATCH  | `/editService/:id`    | Update an existing service         |
| DELETE | `/manageService/:id`  | Delete a service                   |

---

### 🛍️ Booking System

| Method | Route                           | Description                         |
| ------ | ------------------------------- | ----------------------------------- |
| POST   | `/bookService`                  | Book a service                      |
| GET    | `/bookService/:email`           | Get all services booked by a user   |
| GET    | `/servicesToDo/:email`          | Get services booked from a provider |
| PATCH  | `/serviceToDo/changeStatus/:id` | Update service booking status       |

---

## 🛡️ Protected Routes

The following routes require a valid JWT token:

- `GET /bookService/:email`
- `GET /servicesToDo/:email`
- `PATCH /serviceToDo/changeStatus/:id`
- `GET /manageService/:email`
- `DELETE /manageService/:id`
- `PATCH /editService/:id`

Authentication is handled using middleware: `verifyToken`.

---

## 📁 Sample Request Format

### Add a New Service

```json
POST /addService

{
  "img": "https://example.com/service.jpg",
  "service": "Home Repair",
  "price": 50,
  "area": "Dhaka",
  "description": "Quick home repair at affordable price.",
  "serviceProviderName": "John Doe",
  "serviceProviderEmail": "john@example.com",
  "serviceProviderImg": "https://example.com/user.jpg"
}
```

---

## 🔐 JWT Authentication Flow

1. After logging in via Firebase on the frontend, user email is sent to:
   ```
   POST https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/jwt
   ```
2. Server generates a JWT token and sets it as a secure HTTP-only cookie.
3. Token is sent with every request to protected routes.
4. On logout, the cookie is cleared:
   ```
   GET https://serv-ease-server-rupongomez-rupongomezs-projects.vercel.app/logout
   ```

---

## 📝 Notes

- All sensitive data (Firebase keys, DB credentials) are hidden using environment variables.
- CORS is configured to allow requests only from trusted origins.
- Cookies are set with `secure: true`, `httpOnly: true`, and `sameSite: 'none'`.
- Uses MongoDB for scalable and flexible data storage.
- Fully deployed on **Vercel**.

---
