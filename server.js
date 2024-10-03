import express from "express";
import cookieParser from "cookie-parser";
import { ENV_VARS } from "./config/envVar.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
// import userRoutes from "./routes/user.routes.js";
import connectDB from "./config/db.js";
import setupLogger from "./utils/logger.js";

const app = express();

setupLogger(app); // Set up the logger

app.use(express.json()); // to parse the body of the request
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);
// app.use("/api/v1/users", userRoutes);

app.listen(ENV_VARS.PORT, () => {
  console.log(`server is running on port ${ENV_VARS.PORT}`);
  connectDB();
});
