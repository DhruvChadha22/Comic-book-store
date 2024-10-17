const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Creating dummy records for api testing
async function main() {
    const comics = [
        {
            bookName: "The Masked Avenger",
            author: "John Hartwell",
            year: 2018,
            price: 1599,
            discount: 10,
            numOfPages: 240,
            condition: "new",
        },
        {
            bookName: "Shadow of the Night",
            author: "Emily Drake",
            year: 2015,
            price: 1250,
            discount: 5,
            numOfPages: 180,
            condition: "used",
        },
        {
            bookName: "Galactic Defenders",
            author: "Martin Blackwood",
            year: 2014,
            price: 1375,
            discount: 5,
            numOfPages: 230,
            condition: "new",
        },
        {
            bookName: "Captain Solar: Origin Story",
            author: "Michael Trevors",
            year: 2020,
            price: 1875,
            discount: 20,
            numOfPages: 320,
            condition: "new",
        },
        {
            bookName: "The Phantom of Metropolis",
            author: "Sarah Green",
            year: 2019,
            price: 1499,
            discount: 15,
            numOfPages: 210,
            condition: "used",
        },
        {
            bookName: "Iron Claw Chronicles",
            author: "Patrick Kingsley",
            year: 2021,
            price: 2200,
            discount: 25,
            numOfPages: 280,
            condition: "new",
        },
        {
            bookName: "Cosmic Warriors: The Dawn",
            author: "Julia Matthews",
            year: 2017,
            price: 1199,
            discount: 10,
            numOfPages: 150,
            condition: "used",
        },
        {
            bookName: "The Lost Realm",
            author: "Rachel Morgan",
            year: 2016,
            price: 1650,
            numOfPages: 200,
            condition: "new",
        },
        {
            bookName: "The Crimson Crusader",
            author: "Adam Blake",
            year: 2022,
            price: 1999,
            discount: 30,
            numOfPages: 290,
            condition: "used",
        },
        {
            bookName: "Starlight Adventures",
            author: "Lily Summers",
            year: 2023,
            price: 2499,
            discount: 15,
            numOfPages: 350,
            condition: "new",
        },
    ]

    await prisma.comicBooks.createMany({
        data: comics,
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });
