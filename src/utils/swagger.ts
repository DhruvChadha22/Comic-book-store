import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./api-docs.json";

function swaggerDocs(app: Express, port: number) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    console.log(`Docs available at http://localhost:${port}/docs`);
};

export default swaggerDocs;
