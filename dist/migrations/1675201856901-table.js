"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675201856901 = void 0;
class table1675201856901 {
    name = 'table1675201856901';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "categories" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "PK_51615bef2cea22812d0dcab6e18" PRIMARY KEY ("category_id"))`);
        await queryRunner.query(`CREATE TABLE "sub_category" ("sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "PK_9093d2b6ef348c9e323b3673cb1" PRIMARY KEY ("sub_id"))`);
        await queryRunner.query(`CREATE TABLE "sub_sub_category" ("sub_sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "subCategoryId" uuid, CONSTRAINT "PK_62f017846cecaf412f299ebe114" PRIMARY KEY ("sub_sub_id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "price" character varying NOT NULL, "rate" integer NOT NULL, "brand" character varying NOT NULL, "size" character varying NOT NULL, "netto" character varying NOT NULL, "author" character varying NOT NULL, "description" character varying NOT NULL, "color" character varying NOT NULL, "made_in" character varying NOT NULL, "img" character varying NOT NULL, "img1" character varying NOT NULL, "img2" character varying NOT NULL, "subSubCategoryId" uuid, CONSTRAINT "PK_a8940a4bf3b90bd7ac15c8f4dd9" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("order_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "custommerId" uuid, "productId" uuid, CONSTRAINT "PK_cad55b3cb25b38be94d2ce831db" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`CREATE TABLE "custommers" ("custommer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "commentsId" uuid, CONSTRAINT "PK_f838f51015d120da68c688ed9c1" PRIMARY KEY ("custommer_id"))`);
        await queryRunner.query(`CREATE TABLE "cumments" ("comment_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_7bd73f50c33404117020ceabdd6" PRIMARY KEY ("comment_id"))`);
        await queryRunner.query(`ALTER TABLE "sub_category" ADD CONSTRAINT "FK_51b8c0b349725210c4bd8b9b7a7" FOREIGN KEY ("categoryId") REFERENCES "categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_sub_category" ADD CONSTRAINT "FK_930fb77acc4e81ec8c10b8cfa7a" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_c4cd33bbba48ef3b5e361155822" FOREIGN KEY ("subSubCategoryId") REFERENCES "sub_sub_category"("sub_sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16" FOREIGN KEY ("custommerId") REFERENCES "custommers"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "custommers" ADD CONSTRAINT "FK_3a7bd85fadc2a5a835fc82da877" FOREIGN KEY ("commentsId") REFERENCES "cumments"("comment_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cumments" ADD CONSTRAINT "FK_66fc3d62c297865617e1790ad16" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cumments" DROP CONSTRAINT "FK_66fc3d62c297865617e1790ad16"`);
        await queryRunner.query(`ALTER TABLE "custommers" DROP CONSTRAINT "FK_3a7bd85fadc2a5a835fc82da877"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_8624dad595ae567818ad9983b33"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_c4cd33bbba48ef3b5e361155822"`);
        await queryRunner.query(`ALTER TABLE "sub_sub_category" DROP CONSTRAINT "FK_930fb77acc4e81ec8c10b8cfa7a"`);
        await queryRunner.query(`ALTER TABLE "sub_category" DROP CONSTRAINT "FK_51b8c0b349725210c4bd8b9b7a7"`);
        await queryRunner.query(`DROP TABLE "cumments"`);
        await queryRunner.query(`DROP TABLE "custommers"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "sub_sub_category"`);
        await queryRunner.query(`DROP TABLE "sub_category"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }
}
exports.table1675201856901 = table1675201856901;
