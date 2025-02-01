import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const createTables = async () => {
  try {
    await db.connect();
    console.log("Connected to database ✅");

    // Create Users Table
    await db.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT,
        CONSTRAINT email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
        );
    `);
    console.log("Users table created ✅");

    // Create Blog Table
    await db.query(`
      CREATE TABLE blog_details (
        user_id INTEGER REFERENCES users(id) NOT NULL,
        blog_id SERIAL,
        created_at TEXT,
        title TEXT NOT NULL,
        image BYTEA,
        content TEXT
    )
    `);
    console.log("Blog table created ✅");

  } catch (error) {
    console.error("Database setup failed:", error);
  } finally {
    await db.end();
    process.exit();
  }
};

createTables();