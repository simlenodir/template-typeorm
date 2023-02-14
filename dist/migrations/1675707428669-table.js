"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675707428669 = void 0;
class table1675707428669 {
    name = 'table1675707428669';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" DROP CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_8624dad595ae567818ad9983b33"`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sub_categories" ("sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "PK_32b9ffa93cf0c96b67bb8bb64e9" PRIMARY KEY ("sub_id"))`);
        await queryRunner.query(`CREATE TABLE "sub_sub_categories" ("sub_sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "subCategoryId" uuid, CONSTRAINT "PK_edec79a012217fc1e0514ce0b2c" PRIMARY KEY ("sub_sub_id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "price" numeric, "discont_price" numeric NOT NULL DEFAULT '0', "brand" character varying, "size" character varying, "netto" character varying, "author" character varying, "description" character varying, "color" character varying, "made_in" character varying NOT NULL, "img" character varying NOT NULL, "img1" character varying, "img2" character varying, "on_sale" boolean NOT NULL DEFAULT true, "discont" integer NOT NULL DEFAULT '0', "sold_count" integer NOT NULL DEFAULT '0', "time" TIMESTAMP NOT NULL DEFAULT now(), "subSubCategoryId" uuid, CONSTRAINT "PK_a8940a4bf3b90bd7ac15c8f4dd9" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("comment_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "custommerId" uuid, "productId" uuid, CONSTRAINT "PK_eb0d76f2ca45d66a7de04c7c72b" PRIMARY KEY ("comment_id"))`);
        await queryRunner.query(`CREATE TABLE "custommers" ("custommer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "gender" character varying, "avatar" character varying, CONSTRAINT "PK_f838f51015d120da68c688ed9c1" PRIMARY KEY ("custommer_id"))`);
        await queryRunner.query(`CREATE TABLE "products_customer_custommers" ("productsProductId" uuid NOT NULL, "custommersCustommerId" uuid NOT NULL, CONSTRAINT "PK_70fb501efd7e20cd2a83faa25cd" PRIMARY KEY ("productsProductId", "custommersCustommerId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a3d85608137459397483f62316" ON "products_customer_custommers" ("productsProductId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c8018ff4057f168d7168718fd6" ON "products_customer_custommers" ("custommersCustommerId") `);
        await queryRunner.query(`ALTER TABLE "rate" ADD CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16" FOREIGN KEY ("custommerId") REFERENCES "custommers"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_categories" ADD CONSTRAINT "FK_dfa3adf1b46e582626b295d0257" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_sub_categories" ADD CONSTRAINT "FK_32abe67777d7c307a03082a94e0" FOREIGN KEY ("subCategoryId") REFERENCES "sub_categories"("sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_c4cd33bbba48ef3b5e361155822" FOREIGN KEY ("subSubCategoryId") REFERENCES "sub_sub_categories"("sub_sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_ec6823933db634067a556e7d7f2" FOREIGN KEY ("custommerId") REFERENCES "custommers"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_9f8304787dd13d61bc94afd07b0" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products_customer_custommers" ADD CONSTRAINT "FK_a3d85608137459397483f62316a" FOREIGN KEY ("productsProductId") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_customer_custommers" ADD CONSTRAINT "FK_c8018ff4057f168d7168718fd64" FOREIGN KEY ("custommersCustommerId") REFERENCES "custommers"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_customer_custommers" DROP CONSTRAINT "FK_c8018ff4057f168d7168718fd64"`);
        await queryRunner.query(`ALTER TABLE "products_customer_custommers" DROP CONSTRAINT "FK_a3d85608137459397483f62316a"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_9f8304787dd13d61bc94afd07b0"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_ec6823933db634067a556e7d7f2"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_c4cd33bbba48ef3b5e361155822"`);
        await queryRunner.query(`ALTER TABLE "sub_sub_categories" DROP CONSTRAINT "FK_32abe67777d7c307a03082a94e0"`);
        await queryRunner.query(`ALTER TABLE "sub_categories" DROP CONSTRAINT "FK_dfa3adf1b46e582626b295d0257"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_8624dad595ae567818ad9983b33"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16"`);
        await queryRunner.query(`ALTER TABLE "rate" DROP CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c8018ff4057f168d7168718fd6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3d85608137459397483f62316"`);
        await queryRunner.query(`DROP TABLE "products_customer_custommers"`);
        await queryRunner.query(`DROP TABLE "custommers"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "sub_sub_categories"`);
        await queryRunner.query(`DROP TABLE "sub_categories"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16" FOREIGN KEY ("custommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rate" ADD CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.table1675707428669 = table1675707428669;
