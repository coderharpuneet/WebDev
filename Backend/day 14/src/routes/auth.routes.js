const express = require("express");
const app = express();
const authRouter = express.Router();
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  // Create a new user instance
  const newUser = await userModel.create({
    name,
    email,
    password: crypto.createHash("sha256").update(password).digest("hex"),
  });

  //creating a token and store token in the cookie storage
  // Why cookie storage
  //cookies are useful because they let the browser securely carry your 
  //authentication token between the frontend and backend without you manually 
  //attaching the JWT to every request.
  const token = jwt.sign(
    {
      id: newUser._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    },
  })
});

authRouter.get("/get-me",async (req,res)=>{
  const token=req.cookies.token;
  const decoded=jwt.verify(token,process.env.JWT_SECRET);
  console.log(decoded);
  const user=await userModel.findById(decoded.id);
  res.json({
    name:user.name,
    email:user.email
  })
})


authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");
  if (user.password !== hashedPassword) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Generate a token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token);
  res.json({ message: "Login successful", token });
});

module.exports = authRouter;