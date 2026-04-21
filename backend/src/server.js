import "dotenv/config";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
const PORT = process.env.PORT;

app.get("/api/auth/login", (req, res) => {
  res.send("Login Route");
});
app.get("/api/auth/logout", (req, res) => {
  res.send("Logout Route");
});
app.use(express.json())
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
  connectDB();
});
