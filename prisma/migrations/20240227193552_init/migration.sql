/*
  Warnings:

  - Made the column `color` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dimensions` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageUrl` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `manufacturer` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `material` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shippingInfo` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `size` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tags` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `warranty` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "color" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "dimensions" SET NOT NULL,
ALTER COLUMN "imageUrl" SET NOT NULL,
ALTER COLUMN "manufacturer" SET NOT NULL,
ALTER COLUMN "material" SET NOT NULL,
ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "shippingInfo" SET NOT NULL,
ALTER COLUMN "size" SET NOT NULL,
ALTER COLUMN "tags" SET NOT NULL,
ALTER COLUMN "warranty" SET NOT NULL,
ALTER COLUMN "weight" SET NOT NULL;
