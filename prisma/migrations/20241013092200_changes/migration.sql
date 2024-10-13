/*
  Warnings:

  - You are about to drop the column `hidden` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `openToEveryone` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `token` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserPurchases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `subtitle_tried` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `subtitles` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_1` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_2` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_3` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_4` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_mp4_1` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_mp4_2` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_mp4_3` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_1080p_mp4_4` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_1` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_2` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_3` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_4` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_mp4_1` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_mp4_2` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_mp4_3` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_360p_mp4_4` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_1` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_2` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_3` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_4` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_mp4_1` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_mp4_2` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_mp4_3` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `video_720p_mp4_4` on the `VideoMetadata` table. All the data in the column will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vote` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `userId` on the `Bookmark` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Certificate` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `price` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `userId` on the `UserPurchases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `VideoProgress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_userId_fkey";

-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserPurchases" DROP CONSTRAINT "UserPurchases_userId_fkey";

-- DropForeignKey
ALTER TABLE "VideoProgress" DROP CONSTRAINT "VideoProgress_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_answerId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_userId_fkey";

-- AlterTable
ALTER TABLE "Bookmark" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Certificate" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "hidden";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "openToEveryone",
DROP COLUMN "slug",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "token",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserPurchases" DROP CONSTRAINT "UserPurchases_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "UserPurchases_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "VideoMetadata" DROP COLUMN "subtitle_tried",
DROP COLUMN "subtitles",
DROP COLUMN "video_1080p_1",
DROP COLUMN "video_1080p_2",
DROP COLUMN "video_1080p_3",
DROP COLUMN "video_1080p_4",
DROP COLUMN "video_1080p_mp4_1",
DROP COLUMN "video_1080p_mp4_2",
DROP COLUMN "video_1080p_mp4_3",
DROP COLUMN "video_1080p_mp4_4",
DROP COLUMN "video_360p_1",
DROP COLUMN "video_360p_2",
DROP COLUMN "video_360p_3",
DROP COLUMN "video_360p_4",
DROP COLUMN "video_360p_mp4_1",
DROP COLUMN "video_360p_mp4_2",
DROP COLUMN "video_360p_mp4_3",
DROP COLUMN "video_360p_mp4_4",
DROP COLUMN "video_720p_1",
DROP COLUMN "video_720p_2",
DROP COLUMN "video_720p_3",
DROP COLUMN "video_720p_4",
DROP COLUMN "video_720p_mp4_1",
DROP COLUMN "video_720p_mp4_2",
DROP COLUMN "video_720p_mp4_3",
DROP COLUMN "video_720p_mp4_4",
ADD COLUMN     "video_Link" TEXT;

-- AlterTable
ALTER TABLE "VideoProgress" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Answer";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "Vote";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VideoProgress_contentId_userId_key" ON "VideoProgress"("contentId", "userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPurchases" ADD CONSTRAINT "UserPurchases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoProgress" ADD CONSTRAINT "VideoProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
