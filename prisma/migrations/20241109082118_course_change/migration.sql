/*
  Warnings:

  - Added the required column `curriculum` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructor` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "curriculum" JSONB NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "instructor" TEXT NOT NULL,
ADD COLUMN     "overview" TEXT NOT NULL;
