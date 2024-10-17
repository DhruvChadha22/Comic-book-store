import { z } from "zod";

//Zod schemas for validating the /manage api requests
export const createComicSchema = z.object({
    bookName: z.string(),
    author: z.string(),
    year: z.number(),
    price: z.number(),
    discount: z.number().optional(),
    numOfPages: z.number(),
    condition: z.enum(["new", "used"]),
    description: z.string().optional(),
});

export const editComicSchema = z.object({
    bookName: z.string(),
    author: z.string(),
    year: z.number(),
    price: z.number(),
    discount: z.number(),
    numOfPages: z.number(),
    condition: z.enum(["new", "used"]),
    description: z.string(),
}).partial().required({
    bookName: true,
});

export const deleteComicSchema = z.object({
    bookName: z.string(),
});
