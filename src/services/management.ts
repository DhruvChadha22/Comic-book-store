import createHttpError from "http-errors";
import { z } from "zod";
import { prisma } from "../db/index";
import { createComicSchema, editComicSchema, deleteComicSchema } from "../schemas/management";

type CreateData = z.infer<typeof createComicSchema>;
type EditData = z.infer<typeof editComicSchema>;
type DeleteData = z.infer<typeof deleteComicSchema>;

//Service to create a new comic record if it doesn't already exist
export const handleCreateComic = async (body: CreateData) => {
    const existingComic = await prisma.comicBooks.findUnique({
        where: {
            bookName: body.bookName,
        },
    });

    if (existingComic) {
        throw createHttpError(400, "Comic already exists");
    }

    const data = await prisma.comicBooks.create({
        data: {
            bookName: body.bookName,
            author: body.author,
            year: body.year,
            price: body.price * 100,
            discount: body.discount,
            numOfPages: body.numOfPages,
            condition: body.condition,
            description: body.description,
        },
    });

    return data;
};

//Service to edit a comic record if it exists
export const handleEditComic = async (body: EditData) => {
    const existingComic = await prisma.comicBooks.findUnique({
        where: {
            bookName: body.bookName,
        },
    });

    if (!existingComic) {
        throw createHttpError(404, "Comic NOT found");
    }

    const data = await prisma.comicBooks.update({
        where: {
            bookName: body.bookName,
        },
        data: {
            author: body.author,
            year: body.year,
            price: body.price ? body.price * 100 : undefined,
            discount: body.discount,
            numOfPages: body.numOfPages,
            condition: body.condition,
            description: body.description,
        },
    });

    return data;
};

//Service to delete a comic record if it exists
export const handleDeleteComic = async (body: DeleteData) => {
    const existingComic = await prisma.comicBooks.findUnique({
        where: {
            bookName: body.bookName,
        },
    });

    if (!existingComic) {
        throw createHttpError(404, "Comic NOT found");
    }

    const data = await prisma.comicBooks.delete({
        where: {
            bookName: body.bookName,
        },
    });

    return data;
};
