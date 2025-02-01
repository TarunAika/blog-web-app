import db from "../db/db.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const uploadBlog = async (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) return res.status(401).json({ error: "Unauthorized" });
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id;
  
      const { title, content } = req.body;
      if (!title || !content) return res.status(400).json({ error: "Title and content are required" });
  
      const image = req.file ? req.file.buffer : null; // Store image buffer
      
      const query = `
        INSERT INTO blog_details (user_id, title, created_at, image, content)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const createdAt = new Date().toISOString();
  
      const values = [userId, title, createdAt, image, content];
  
      const result = await db.query(query, values);
      res.status(201).json(result.rows[0]);
  
    } catch (error) {
      console.error("Error inserting blog:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}

const dashboard = async (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.id;
  
      const result = await db.query("SELECT * FROM blog_details WHERE user_id = $1", [userId]);
  
      const blogs = result.rows.map(blog => ({
        id: blog.blog_id,
        title: blog.title,
        content: blog.content,
        image: blog.image ? `data:image/jpeg;base64,${blog.image.toString("base64")}` : null
      }));
  
      res.json({ user: decoded, blogs });
  
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
}

const blogPage = async (req, res) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const blogId = req.params.id;
      const query = `SELECT users.name, blog_details.created_at, blog_details.title, blog_details.image, blog_details.content
                    FROM users
                    JOIN blog_details 
                    ON users.id = blog_details.user_id
                    WHERE blog_details.blog_id = $1;`
  
      const result = await db.query(query, [blogId]);
  
      const blogs = result.rows.map(blog => ({
        username: blog.name,
        time: blog.created_at,
        title: blog.title,
        content: blog.content,
        image: blog.image ? `data:image/jpeg;base64,${blog.image.toString("base64")}` : null
      }));
  
      res.json({ blogs });
  
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
}

export { uploadBlog, dashboard, blogPage };