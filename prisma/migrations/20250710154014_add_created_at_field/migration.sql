/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
ADD COLUMN     "description" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "imageUrl" DROP NOT NULL,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Book_id_seq";
