-- CreateEnum
CREATE TYPE "public"."Sex" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "public"."ApplicationStatus" AS ENUM ('created', 'paid', 'pdf_ready');

-- CreateTable
CREATE TABLE "public"."Application" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "issueCountry" TEXT NOT NULL,
    "dobDay" INTEGER NOT NULL,
    "dobMonth" INTEGER NOT NULL,
    "dobYear" INTEGER NOT NULL,
    "sex" "public"."Sex" NOT NULL,
    "planYears" INTEGER NOT NULL,
    "licenseNumber" TEXT,
    "licenseCategories" TEXT[],
    "signatureDataUrl" TEXT NOT NULL,
    "verificationId" TEXT NOT NULL,
    "headshotPath" TEXT NOT NULL,
    "headshotOriginalName" TEXT NOT NULL,
    "headshotMimeType" TEXT NOT NULL,
    "headshotSize" INTEGER NOT NULL,
    "status" "public"."ApplicationStatus" NOT NULL DEFAULT 'created',

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Application_createdAt_idx" ON "public"."Application"("createdAt");
