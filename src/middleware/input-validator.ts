import { z, ZodError } from "zod";
import { NextFunction, Request, Response } from "express";

//Closure function to validate the request body using the given input schema 
export function validateData(schema: z.ZodObject<any, any>) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({ error: error.issues });
            } else {
                res.status(500).json({ error: "Internal Server Error" });
            }
        }
    };
};
