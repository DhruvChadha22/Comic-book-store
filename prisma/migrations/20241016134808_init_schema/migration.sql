-- CreateEnum
CREATE TYPE "ConditionType" AS ENUM ('new', 'used');

-- CreateTable
CREATE TABLE "ComicBooks" (
    "id" TEXT NOT NULL,
    "bookName" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER,
    "numOfPages" INTEGER NOT NULL,
    "condition" "ConditionType" NOT NULL,
    "description" TEXT,

    CONSTRAINT "ComicBooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ComicBooks_bookName_key" ON "ComicBooks"("bookName");
