# Full-Stack Blog Application

A modern full-stack blog application built with React and Express.js, featuring secure authentication and a clean, intuitive interface for creating and managing blog posts.

## 🚀 Features

- **User Authentication** - Secure JWT-based authentication with HttpOnly cookies
- **Blog Management** - Create, view, and manage blog posts
- **PostgreSQL Database** - Robust and scalable data storage
- **Modern UI** - Built with React for a responsive user experience
- **RESTful API** - Clean and maintainable Express.js backend

## 🛠️ Tech Stack

**Frontend:**
- React
- Vite

**Backend:**
- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Tokens)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <project-directory>
```

### 2. Backend Setup

#### Navigate to the backend folder:

```bash
cd backend
```

#### Install dependencies:

```bash
npm install
```

#### Configure Environment Variables

Create a `.env` file in the backend directory and add the following:

```env
PG_USER=your_db_user
PG_HOST=your_db_host
PG_DATABASE=your_db_name
PG_PASSWORD=your_db_password
PG_PORT=your_db_port
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

> **Note:** Replace the placeholder values with your actual database credentials and generate a secure JWT secret.

#### Setup the Database

Run the database setup script to create the necessary tables:

```bash
node db/setupDB.js
```

#### Start the Backend Server

```bash
node server.js
```

The backend server should now be running on `http://localhost:5000` (or your configured port).

### 3. Frontend Setup

#### Navigate to the frontend folder:

```bash
cd ../frontend
```

#### Install dependencies:

```bash
npm install
```

#### Start the Development Server

```bash
npm run dev
```

The frontend application should now be running on `http://localhost:5173` (Vite's default port).

## 🗂️ Project Structure

```
project-root/
├── backend/
│   ├── db/
│   │   └── setupDB.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔐 Authentication

This application uses JWT (JSON Web Tokens) stored in HttpOnly cookies for secure authentication. This approach prevents XSS attacks while maintaining user sessions.

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PG_USER` | PostgreSQL username | `postgres` |
| `PG_HOST` | PostgreSQL host | `localhost` |
| `PG_DATABASE` | Database name | `blog_db` |
| `PG_PASSWORD` | Database password | `your_password` |
| `PG_PORT` | PostgreSQL port | `5432` |
| `JWT_SECRET` | Secret key for JWT | `your_secure_random_string` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## 🚦 Usage

1. Register a new account or login with existing credentials
2. Create new blog posts from the dashboard
3. View and manage your blog posts
4. Logout securely when done

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Happy Blogging!** ✨