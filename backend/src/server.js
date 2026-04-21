import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser"

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT;


app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
  connectDB();
});
