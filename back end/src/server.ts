import express from "express";
import "dotenv/config";
import router from "./router";
import { connectDB } from "./config/db";
import cors from "cors";
import { corsOptions } from "./config/cors";


// Connect to the database
connectDB();


const app = express();

app.use(cors({ origin: "http://localhost:5173" })); // Allow frontend requests


// Middleware to parse JSON
app.use(express.json());

// Root router
app.use('/', router);


// Export the app
export default app;