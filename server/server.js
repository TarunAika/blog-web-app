import express from "express";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import authenticateToken from "./auth/jwtMiddleware.js";
import { register, login, checkAuth } from "./auth/authControllers.js";
import { uploadBlog, dashboard, blogPage } from "./auth/blogControllers.js";

const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(cors({
    origin: "http://localhost:5001", // Replace with the URL of your React app
    credentials: true, // Enable cookies and session sharing
}));

app.use(cookieParser());
app.use(express.json());

// Auth controllers
app.get("/api/auth", checkAuth);

app.post("/register", register);

app.post("/login", login);


// Blog manipulation controllers
app.post("/upload", authenticateToken, upload.single("image"), uploadBlog);

app.get("/api/user", authenticateToken, dashboard);

app.get("/blog/:id", authenticateToken, blogPage);

app.listen(port, () => {
    console.log(`Listening at ${port}.`)
})