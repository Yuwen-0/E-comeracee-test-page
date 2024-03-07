/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `discount` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `manufacturer` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `reviews` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shippingInfo` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `warranty` on the `Product` table. All the data in the column will be lost.
  - The `id` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `name` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `weight` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `availability` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `features` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inventoryLevel` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metaKeywords` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seoTitle` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDescription` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategory` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `color` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dimensions` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `material` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Product_brand_key";

-- DropIndex
DROP INDEX "Product_name_key";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "discount",
DROP COLUMN "featured",
DROP COLUMN "imageUrl",
DROP COLUMN "manufacturer",
DROP COLUMN "rating",
DROP COLUMN "releaseDate",
DROP COLUMN "reviews",
DROP COLUMN "shippingInfo",
DROP COLUMN "size",
DROP COLUMN "stock",
DROP COLUMN "tags",
DROP COLUMN "warranty",
ADD COLUMN     "availability" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currency" VARCHAR(3) NOT NULL,
ADD COLUMN     "features" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "inventoryLevel" INTEGER NOT NULL,
ADD COLUMN     "metaKeywords" TEXT NOT NULL,
ADD COLUMN     "numberOfReviews" INTEGER,
ADD COLUMN     "ratings" DECIMAL(65,30),
ADD COLUMN     "salePrice" DECIMAL(65,30),
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoTitle" VARCHAR(255) NOT NULL,
ADD COLUMN     "shortDescription" TEXT NOT NULL,
ADD COLUMN     "sku" TEXT NOT NULL,
ADD COLUMN     "subcategory" TEXT NOT NULL,
ADD COLUMN     "technicalSpecs" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "videoUrl" TEXT,
ALTER COLUMN "color" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "dimensions" SET NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "material" SET NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "weight" SET NOT NULL,
ALTER COLUMN "weight" SET DATA TYPE DECIMAL(65,30),
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
