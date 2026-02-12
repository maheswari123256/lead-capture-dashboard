import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
