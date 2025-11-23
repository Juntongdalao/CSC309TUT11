import express from "express";
import routes from "./routes.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();

// Get allowed frontend URL from environment (fallback to dev URL)
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({origin: FRONTEND_URL,}));
app.use(express.json());
app.use('', routes);

export default app;