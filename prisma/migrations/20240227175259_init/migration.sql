-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_category" TEXT NOT NULL,
    "product_price" DOUBLE PRECISION NOT NULL,
    "product_discount" DOUBLE PRECISION NOT NULL,
    "product_reviews" INTEGER NOT NULL,
    "product_brand" TEXT NOT NULL,
    "product_stock" INTEGER NOT NULL,
    "product_release_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_description" TEXT,
    "product_image_url" TEXT,
    "product_color" TEXT,
    "product_size" TEXT,
    "product_material" TEXT,
    "product_weight" DOUBLE PRECISION,
    "product_dimensions" TEXT,
    "product_manufacturer" TEXT,
    "product_rating" DOUBLE PRECISION,
    "product_warranty" INTEGER,
    "product_tags" TEXT,
    "product_shipping_info" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);
