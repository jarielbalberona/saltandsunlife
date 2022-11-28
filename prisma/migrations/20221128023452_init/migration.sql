-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'fins',
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(250) NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "tags" TEXT NOT NULL,
    "sizes" TEXT NOT NULL,
    "discount" DOUBLE PRECISION,
    "discount_type" VARCHAR(100),
    "price" DOUBLE PRECISION NOT NULL,
    "sold" INTEGER NOT NULL,
    "average_review" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "subtotal" DOUBLE PRECISION NOT NULL,
    "total_discount" DOUBLE PRECISION NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "shipping_address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profile_link" TEXT,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discounts" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'percentage',
    "name" VARCHAR(100) NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "items" TEXT NOT NULL DEFAULT 'all',
    "remaining" INTEGER NOT NULL,
    "expired_at" TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seeders" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "seed_id" INTEGER NOT NULL,
    "date_of_seed" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seeders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "items_type_code_name_idx" ON "items"("type", "code", "name");

-- CreateIndex
CREATE INDEX "orders_status_idx" ON "orders"("status");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE INDEX "customers_email_idx" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_email_key" ON "suppliers"("email");

-- CreateIndex
CREATE INDEX "suppliers_email_idx" ON "suppliers"("email");

-- CreateIndex
CREATE INDEX "order_items_order_id_item_id_idx" ON "order_items"("order_id", "item_id");

-- CreateIndex
CREATE UNIQUE INDEX "discounts_code_key" ON "discounts"("code");

-- CreateIndex
CREATE INDEX "discounts_code_idx" ON "discounts"("code");

-- CreateIndex
CREATE UNIQUE INDEX "seeders_filename_key" ON "seeders"("filename");

-- CreateIndex
CREATE UNIQUE INDEX "seeders_seed_id_key" ON "seeders"("seed_id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_code_fkey" FOREIGN KEY ("code") REFERENCES "discounts"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
