import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { sequelize } from "./config/database";
import mainRoutes from "./routes";
import authRoutes from "./routes/authroute";

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", mainRoutes);

// Database check
sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((error) => console.error("Database error:", error));

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});