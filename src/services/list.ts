import { z } from "zod";
import { prisma } from "../db/index";
import { listComicsSchema } from "../schemas/list";

type Data = z.infer<typeof listComicsSchema>;

export const handleGetComicsList = async (options: Data) => {
    //Calculating the starting index of the paginated results
    const startIndex = (options.page - 1) * options.limit;

    //Counting the total records of the filtered data to calculate total pages
    const total = await prisma.comicBooks.count({
        where: {
            ...options.filterBy,
        },
    });

    //Retrieving the paginated data
    const comicsList = await prisma.comicBooks.findMany({
        skip: startIndex,
        take: options.limit,
        where: {
            ...options.filterBy,
        },
        orderBy: {
            ...options.orderBy,
        },
    });

    return {
        page: options.page,
        limit: options.limit,
        total,
        pages: Math.ceil(total / options.limit),
        data: comicsList
    };
};
