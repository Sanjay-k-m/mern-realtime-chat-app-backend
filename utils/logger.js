import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ENV_VARS } from "../config/envVar.js";

// Get current file and directory names
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a log directory if it doesn't exist
const logDirectory = path.join(__dirname, "logs");
try {
  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true }); // Use recursive to ensure all directories are created
  }
} catch (error) {
  console.error("Failed to create log directory:", error);
}

// Create a log stream for production logs
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

// Function to set up the logger
const setupLogger = (app) => {
  // Choose logging format based on the environment
  const format = ENV_VARS.NODE_ENV === "development" ? "dev" : "combined";

  // Use Morgan middleware with appropriate logging format
  app.use(
    morgan(format, {
      stream:
        ENV_VARS.NODE_ENV === "production" ? accessLogStream : process.stdout, // Log to file in production, to console in development
    })
  );

  // Optionally log errors to a separate file
  if (ENV_VARS.NODE_ENV === "production") {
    const errorLogStream = fs.createWriteStream(
      path.join(logDirectory, "error.log"),
      { flags: "a" }
    );

    app.use(
      morgan("combined", {
        stream: errorLogStream,
        skip: (req, res) => res.statusCode < 400 // Log only errors (4xx and 5xx)
      })
    );
  }
};

export default setupLogger;
