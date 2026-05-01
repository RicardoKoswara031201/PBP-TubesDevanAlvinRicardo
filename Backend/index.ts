import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
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

// MIDDLEWARE
app.use(express.json());

// IMAGES
app.use("/images", express.static(path.join(process.cwd(), "images")));

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api", mainRoutes);

// DATABASE CONNECTION CHECK
sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((error) => console.error("Database error:", error));

// ERROR HANDLER
app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);

    res.status(500).json({
      message: err.message || "Internal Server Error",
    });
  }
);

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});