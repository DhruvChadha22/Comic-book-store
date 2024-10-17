import { ErrorRequestHandler } from "express";

//Catches all thrown errors and sends the status code and message to the client
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    if (statusCode === 500) {
        res.status(statusCode).json({ error: "Internal Server Error" });
    }

    res.status(statusCode).json({ error: err.message });
};
