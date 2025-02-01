This is a full-stack blog application built with React, Express.js using PostgreSQL as the database. It features authentication with JWT (HttpOnly cookies) and supports blog creation, viewing, and user authentication.

### Navigate to the backend folder and install dependencies:
cd backend
npm i


### Create a .env file and add the required environment variables:
PG_USER=your_db_user
PG_HOST=your_db_host
PG_DATABASE=your_db_name
PG_PASSWORD=your_db_password
PG_PORT=your_db_port
JWT_SECRET=your_jwt_secret
NODE_ENV=development

### To setup the database, run:
node db/setupDB.js

### To run backend:
node server.js

### Navigate to frontend
cd ../frontend

### Install the dependencies
npm i

### Start the frontend
npm run dev