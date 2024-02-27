/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `product_brand` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_category` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_dimensions` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_discount` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_image_url` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_manufacturer` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_material` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_rating` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_release_date` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_reviews` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_shipping_info` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_size` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_stock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_tags` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_warranty` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_weight` on the `Product` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "product_brand",
DROP COLUMN "product_category",
DROP COLUMN "product_color",
DROP COLUMN "product_description",
DROP COLUMN "product_dimensions",
DROP COLUMN "product_discount",
DROP COLUMN "product_id",
DROP COLUMN "product_image_url",
DROP COLUMN "product_manufacturer",
DROP COLUMN "product_material",
DROP COLUMN "product_name",
DROP COLUMN "product_price",
DROP COLUMN "product_rating",
DROP COLUMN "product_release_date",
DROP COLUMN "product_reviews",
DROP COLUMN "product_shipping_info",
DROP COLUMN "product_size",
DROP COLUMN "product_stock",
DROP COLUMN "product_tags",
DROP COLUMN "product_warranty",
DROP COLUMN "product_weight",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "dimensions" TEXT,
ADD COLUMN     "discount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "manufacturer" TEXT,
ADD COLUMN     "material" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reviews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "shippingInfo" TEXT,
ADD COLUMN     "size" TEXT,
ADD COLUMN     "stock" INTEGER NOT NULL,
ADD COLUMN     "tags" TEXT,
ADD COLUMN     "warranty" INTEGER,
ADD COLUMN     "weight" DOUBLE PRECISION,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
