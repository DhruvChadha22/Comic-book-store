import createHttpError from "http-errors";
import { NextFunction, Request, Response } from "express";
import { handleGetComicDetails } from "../services/details";

export const getComicDetails = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        if (!id) {
            throw createHttpError(400, "Missing comic id");
        }

        //Send the extracted request data to service for internal processing
        const comicData = await handleGetComicDetails(id);

        res.json(comicData);
    } catch (err) {
        next(err);
    }
};
