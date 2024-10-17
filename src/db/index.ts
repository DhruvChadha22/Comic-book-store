//This file generates the prisma client for database queries
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
}

//Global variable to ensure only single prisma client is generated in development env
declare global {
    var prisma: ReturnType<typeof prismaClientSingleton> | undefined;
}

export const prisma = globalThis.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma;
}
