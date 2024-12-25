import express from "express"; // Import express
import cookieParser from "cookie-parser"; // For parsing cookies
import dotenv from "dotenv"; // For environment variables
import cors from "cors"; // For handling cross-origin requests
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"; // Import userRoute

// Load environment variables from .env file
dotenv.config();

// Create express app
const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use custom CORS options
app.use(express.json()); // Parse JSON data
app.use(cookieParser()); // Parse cookies

// Routes
app.use("/api/v1/user", userRoute); // Use the imported userRoute

// Start the server
app.listen(PORT, () => {
  connectDB(); // Connect to DB
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
