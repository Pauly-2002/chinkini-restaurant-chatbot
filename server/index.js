import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";
import http from "http";
import { initializeSocket } from "./socket.js";

dotenv.config();

const app = express();

const server = http.createServer(app);

initializeSocket(server);

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("🔥 REQUEST:", req.method, req.url);
  next();
});

console.log("🔥 Server booting...");
console.log("🔥 Routes loading...");

app.use("/api", routes);

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// 🔥 Start server AFTER DB connection
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    server.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB error:", err);
  });
