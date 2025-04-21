/*
  Warnings:

  - You are about to drop the column `userId` on the `IssueReport` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "IssueReport" DROP CONSTRAINT "IssueReport_userId_fkey";

-- AlterTable
ALTER TABLE "IssueReport" DROP COLUMN "userId";
