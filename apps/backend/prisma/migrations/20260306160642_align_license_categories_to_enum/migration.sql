/*
  Warnings:

  - The `licenseCategories` column on the `Application` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."LicenseCategory" AS ENUM ('A', 'B', 'C', 'D', 'E');

-- AlterTable
ALTER TABLE "public"."Application" DROP COLUMN "licenseCategories",
ADD COLUMN     "licenseCategories" "public"."LicenseCategory"[];
