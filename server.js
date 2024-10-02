import express from "express";
import { ENV_VARS } from "./config/envVar.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(ENV_VARS.PORT, () =>
  console.log(`server is running on port ${ENV_VARS.PORT}`)
);
