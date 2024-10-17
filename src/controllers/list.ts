import { NextFunction, Request, Response } from "express";
import { handleGetComicsList } from "../services/list";

export const getComicsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        //Send the extracted request data to service for internal processing
        const results = await handleGetComicsList(data);

        res.json(results);
    } catch (err) {
        next(err);
    }
};
