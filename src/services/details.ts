import createHttpError from "http-errors";
import { prisma } from "../db/index";

//Service to get a comic's details provided its id if it exists
export const handleGetComicDetails = async (id: string) => {
    const data = await prisma.comicBooks.findUnique({
        where: {
            id: id,
        },
    });

    if (!data) {
        throw createHttpError(404, "Comic NOT found");
    }

    return data;
};
