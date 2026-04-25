import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/database";
import routes from "./routes";
// import { seedData } from "./seeders/seed";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:3001"
}));
app.use(express.json());
app.use("/api", routes);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    // await seedData();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();