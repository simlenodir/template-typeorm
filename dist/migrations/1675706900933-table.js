"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675706900933 = void 0;
class table1675706900933 {
    name = 'table1675706900933';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "rate" ("rate_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "stars" integer, "count_stars" integer, "avarage_stars" numeric, "productId" uuid, CONSTRAINT "REL_fab2aea3fd944f2090161edf5c" UNIQUE ("productId"), CONSTRAINT "PK_723a17c52b0c6cc554b6f71571a" PRIMARY KEY ("rate_id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("order_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "count" integer DEFAULT '0', "custommerId" uuid, "productId" uuid, CONSTRAINT "PK_cad55b3cb25b38be94d2ce831db" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`CREATE TABLE "categories_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "PK_292790f7ca11f8f50c4b899023b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sub_category_entity" ("sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "PK_12c9a00aa65f1d26e098bfa809e" PRIMARY KEY ("sub_id"))`);
        await queryRunner.query(`CREATE TABLE "sub_sub_category_entity" ("sub_sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "subCategoryId" uuid, CONSTRAINT "PK_32a1e48edfe26dde94921f81da0" PRIMARY KEY ("sub_sub_id"))`);
        await queryRunner.query(`CREATE TABLE "products_entity" ("product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "price" numeric, "discont_price" numeric NOT NULL DEFAULT '0', "brand" character varying, "size" character varying, "netto" character varying, "author" character varying, "description" character varying, "color" character varying, "made_in" character varying NOT NULL, "img" character varying NOT NULL, "img1" character varying, "img2" character varying, "on_sale" boolean NOT NULL DEFAULT true, "discont" integer NOT NULL DEFAULT '0', "sold_count" integer NOT NULL DEFAULT '0', "time" TIMESTAMP NOT NULL DEFAULT now(), "subSubCategoryId" uuid, CONSTRAINT "PK_137940543ed091b7a130d07ae66" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "comments_entity" ("comment_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "custommerId" uuid, "productId" uuid, CONSTRAINT "PK_315af397f4c5f8460443a400839" PRIMARY KEY ("comment_id"))`);
        await queryRunner.query(`CREATE TABLE "custommers_entity" ("custommer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "gender" character varying, "avatar" character varying, CONSTRAINT "PK_15d6d37a7b38dd0df8d2c966393" PRIMARY KEY ("custommer_id"))`);
        await queryRunner.query(`CREATE TABLE "products_entity_customer_custommers_entity" ("productsEntityProductId" uuid NOT NULL, "custommersEntityCustommerId" uuid NOT NULL, CONSTRAINT "PK_e8434ac71cbbc1fd08d7bfcc8ae" PRIMARY KEY ("productsEntityProductId", "custommersEntityCustommerId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a377afbe2907689fbf555ee87f" ON "products_entity_customer_custommers_entity" ("productsEntityProductId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a6dff804cdd68c814fad0a6df8" ON "products_entity_customer_custommers_entity" ("custommersEntityCustommerId") `);
        await queryRunner.query(`ALTER TABLE "rate" ADD CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16" FOREIGN KEY ("custommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_category_entity" ADD CONSTRAINT "FK_58285a1282fee1ba7efe812c2fa" FOREIGN KEY ("categoryId") REFERENCES "categories_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_sub_category_entity" ADD CONSTRAINT "FK_c1d01299e639bc33504cf69c865" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category_entity"("sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "FK_97a9e9f7c836fbfbec03ac9cc0a" FOREIGN KEY ("subSubCategoryId") REFERENCES "sub_sub_category_entity"("sub_sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments_entity" ADD CONSTRAINT "FK_ed3f0d820616dd38788d7137aad" FOREIGN KEY ("custommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments_entity" ADD CONSTRAINT "FK_ae490dc049f6626c4b6fdaa0a22" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" ADD CONSTRAINT "FK_a377afbe2907689fbf555ee87f9" FOREIGN KEY ("productsEntityProductId") REFERENCES "products_entity"("product_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" ADD CONSTRAINT "FK_a6dff804cdd68c814fad0a6df87" FOREIGN KEY ("custommersEntityCustommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" DROP CONSTRAINT "FK_a6dff804cdd68c814fad0a6df87"`);
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" DROP CONSTRAINT "FK_a377afbe2907689fbf555ee87f9"`);
        await queryRunner.query(`ALTER TABLE "comments_entity" DROP CONSTRAINT "FK_ae490dc049f6626c4b6fdaa0a22"`);
        await queryRunner.query(`ALTER TABLE "comments_entity" DROP CONSTRAINT "FK_ed3f0d820616dd38788d7137aad"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "FK_97a9e9f7c836fbfbec03ac9cc0a"`);
        await queryRunner.query(`ALTER TABLE "sub_sub_category_entity" DROP CONSTRAINT "FK_c1d01299e639bc33504cf69c865"`);
        await queryRunner.query(`ALTER TABLE "sub_category_entity" DROP CONSTRAINT "FK_58285a1282fee1ba7efe812c2fa"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_8624dad595ae567818ad9983b33"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16"`);
        await queryRunner.query(`ALTER TABLE "rate" DROP CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6dff804cdd68c814fad0a6df8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a377afbe2907689fbf555ee87f"`);
        await queryRunner.query(`DROP TABLE "products_entity_customer_custommers_entity"`);
        await queryRunner.query(`DROP TABLE "custommers_entity"`);
        await queryRunner.query(`DROP TABLE "comments_entity"`);
        await queryRunner.query(`DROP TABLE "products_entity"`);
        await queryRunner.query(`DROP TABLE "sub_sub_category_entity"`);
        await queryRunner.query(`DROP TABLE "sub_category_entity"`);
        await queryRunner.query(`DROP TABLE "categories_entity"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "rate"`);
    }
}
exports.table1675706900933 = table1675706900933;
