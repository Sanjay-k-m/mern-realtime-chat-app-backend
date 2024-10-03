import express from "express";
import { ENV_VARS } from "./config/envVar.js";

import authRoutes from "./routes/auth.routes.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json()); // to parse the body of the request

app.use("/api/auth", authRoutes);

app.listen(ENV_VARS.PORT, () => {
  console.log(`server is running on port ${ENV_VARS.PORT}`);
  connectDB();
});
