import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db/db.js"

const saltRounds = 10;

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const checkEmail = await db.query("SELECT * FROM users WHERE email = $1", [email]); // Check if the email already exists
        if (checkEmail.rows.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const result = await db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
            [name, email, hashedPassword]
        );
        const user = result.rows[0];

        // Generate a JWT
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" } );
        res.cookie("token", token, {httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict"});

        res.status(200).json({ message: "Registration successful", user });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Server error" });
    }
}

const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const checkUser = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    if(checkUser.rows.length > 0) {
      const hashedPassword = checkUser.rows[0].password;
      bcrypt.compare(password, hashedPassword, (err, result) => {
        if(err) {
          console.log("Error comparing passwords:", err);
        } else {
          if(result) {
            const user = checkUser.rows[0];
            const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" } );
            res.cookie("token", token, {httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict"});

            res.status(200).json({
              message: "Login successful",
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
            });
          } else {
            res.status(401).json({ message: "Imavlid credentials" })
          }
        }
      })
    } else {
      res.status(401).json({ message: "User not found" })
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }    
}

const checkAuth = (req, res) => {
  const token = req.cookies.token; // HttpOnly cookie

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token,process.env.JWT_SECRET , (err, decoded) => {
    if (err) {
      return res.json({ isAuthenticated: false });
    }
    res.json({ isAuthenticated: true });
  });
}

export { register, login, checkAuth };