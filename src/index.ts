import express from "express";
import bodyParser from "body-parser";
import detailsRouter from "./routes/details";
import managementRouter from "./routes/management";
import listingRouter from "./routes/list";
import { errorHandler } from "./middleware/error-handler";
import swaggerDocs from "./utils/swagger";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

//Routing the requests to their specific routers
app.use("/details", detailsRouter);
app.use("/manage", managementRouter);
app.use("/list", listingRouter);

//Global error handler: catches any error thrown by the api routes
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
    swaggerDocs(app, PORT);
});
