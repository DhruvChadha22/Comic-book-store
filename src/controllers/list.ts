import createHttpError from "http-errors";
import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import { handleGetComicsList } from "../services/list";
import { listComicsSchema } from "../schemas/list";

type Data = z.infer<typeof listComicsSchema>;
type SortingObject = {
    [key: string]: "asc" | "desc" | undefined;
} | undefined;

export const getComicsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            page,
            limit,
            author,
            year,
            price,
            condition,
            sortBy,
            order,
        } = req.query;

        //Creating the sorting option for orderBy object
        let sortingOption: SortingObject;
        if (sortBy === "price") {
            sortingOption = {
                price: (order as "asc" | "desc") || "asc",
            };
        } else if (sortBy === "year") {
            sortingOption = {
                year: (order as "asc" | "desc") || "asc",
            }; 
        } else if (sortBy === "bookName") {
            sortingOption = {
                bookName: (order as "asc" | "desc") || "asc",
            }; 
        }

        //Tranforming query data into an options object for internal processing
        const options: Data = {
            page: parseInt(page as string) || 1,
            limit: parseInt(limit as string) || 5,
            filterBy: {
                author: author as string || undefined,
                year: parseInt(year as string) || undefined,
                price: parseInt(price as string) || undefined,
                condition: (condition as "new" | "used") || undefined,
            },
            orderBy: sortingOption,
        };

        //Validating the query inputs before internal processing
        const { success } = listComicsSchema.safeParse(options);
        if (!success) {
            throw createHttpError(400, "Invalid Query params");
        }

        //Send the extracted request data to service for internal processing
        const results = await handleGetComicsList(options);

        res.json(results);
    } catch (err) {
        next(err);
    }
};
