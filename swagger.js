import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { ENV_VARS } from "./config/envVar.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Realtime Messaging App API",
      version: "1.0.0",
      description: "API information for Realtime Messaging App",
    },
    servers: [
      {
        url: `http://localhost:${ENV_VARS.PORT}/api/v1`,
        description: "Development server",
      },
      {
        url: `https://realtime-messaging-app.herokuapp.com/api/v1`,
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    "./routes/*.js", // changed from .route.js to *.js
  ],
};

const swaggerSpec = swaggerJsDoc(options);

const configureSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default configureSwagger;

