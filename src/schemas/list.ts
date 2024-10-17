import { z } from "zod";

//Zod schema for validating the /list api request
export const listComicsSchema = z.object({
    page: z.number(),
    limit: z.number(),
    filterBy: z.object({
        author: z.string(),
        year: z.number(),
        price: z.number(),
        condition: z.enum(["new", "used"]),
    }).partial(),
    orderBy: z.object({
        price: z.enum(["asc", "desc"]),
        year: z.enum(["asc", "desc"]),
        bookName: z.enum(["asc", "desc"]),
    }).partial(),
}).partial().required({
    page: true,
    limit: true,
});
