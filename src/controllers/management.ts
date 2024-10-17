import { NextFunction, Request, Response } from "express";
import { handleCreateComic, handleDeleteComic, handleEditComic } from "../services/management";

export const createComic = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        //Send the extracted request data to service for internal processing
        const createdComic = await handleCreateComic(data);

        res.json(createdComic);
    } catch (err) {
        next(err);
    }
};

export const editComic = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        //Send the extracted request data to service for internal processing
        const editedComic = await handleEditComic(data);

        res.json(editedComic);
    } catch (err) {
        next(err);
    }
};

export const deleteComic = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;

        //Send the extracted request data to service for internal processing
        const deletedComic = await handleDeleteComic(data);

        res.json(deletedComic);
    } catch (err) {
        next(err);
    }
};
