import createHttpError from "http-errors";
import { z } from "zod";
import { prisma } from "../db/index";
import { listComicsSchema } from "../schemas/list";

type Data = z.infer<typeof listComicsSchema>;

export const handleGetComicsList = async (body: Data) => {
    //Orderby object should only have one record
    if (body.orderBy && Object.keys(body.orderBy).length > 1) {
        throw createHttpError(400, "Only one sorting condition should be provided");
    }

    const page = body.page || 1;
    const limit = body.limit || 5;
    
    //Calculating the starting index of the paginated results
    const startIndex = (page - 1) * limit;

    //Counting the total records of the filtered data to calculate total pages
    const total = await prisma.comicBooks.count({
        where: {
            ...body.filterBy,
        },
    });

    //Retrieving the paginated data
    const comicsList = await prisma.comicBooks.findMany({
        skip: startIndex,
        take: limit,
        where: {
            ...body.filterBy,
        },
        orderBy: {
            ...body.orderBy,
        },
    });

    return {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        data: comicsList
    };
};
