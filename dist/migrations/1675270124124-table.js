"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675270124124 = void 0;
class table1675270124124 {
    name = 'table1675270124124';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "categories_entity" ("category_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "PK_66a4f310f4cb4c19131ef5b9f35" PRIMARY KEY ("category_id"))`);
        await queryRunner.query(`CREATE TABLE "sub_category_entity" ("sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "PK_12c9a00aa65f1d26e098bfa809e" PRIMARY KEY ("sub_id"))`);
        await queryRunner.query(`CREATE TABLE "sub_sub_category_entity" ("sub_sub_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "subCategoryId" uuid, CONSTRAINT "PK_32a1e48edfe26dde94921f81da0" PRIMARY KEY ("sub_sub_id"))`);
        await queryRunner.query(`CREATE TABLE "products_entity" ("product_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "price" character varying NOT NULL, "rate" integer, "brand" character varying, "size" character varying NOT NULL, "netto" character varying NOT NULL, "author" character varying NOT NULL, "description" character varying, "color" character varying, "made_in" character varying NOT NULL, "img" character varying NOT NULL, "img1" character varying, "img2" character varying, "subSubCategoryId" uuid, CONSTRAINT "PK_137940543ed091b7a130d07ae66" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "comments_entity" ("comment_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "productId" uuid, CONSTRAINT "PK_315af397f4c5f8460443a400839" PRIMARY KEY ("comment_id"))`);
        await queryRunner.query(`CREATE TABLE "custommers_entity" ("custommer_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "commentsId" uuid, CONSTRAINT "PK_15d6d37a7b38dd0df8d2c966393" PRIMARY KEY ("custommer_id"))`);
        await queryRunner.query(`CREATE TABLE "custommers_entity_product_products_entity" ("custommersEntityCustommerId" uuid NOT NULL, "productsEntityProductId" uuid NOT NULL, CONSTRAINT "PK_b2ad8a6a999ba32c5b2f7c244a1" PRIMARY KEY ("custommersEntityCustommerId", "productsEntityProductId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0a321d6bb9ba0be453f6f75ed5" ON "custommers_entity_product_products_entity" ("custommersEntityCustommerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_797b5acdd0749cad4ded83c900" ON "custommers_entity_product_products_entity" ("productsEntityProductId") `);
        await queryRunner.query(`ALTER TABLE "sub_category_entity" ADD CONSTRAINT "FK_58285a1282fee1ba7efe812c2fa" FOREIGN KEY ("categoryId") REFERENCES "categories_entity"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_sub_category_entity" ADD CONSTRAINT "FK_c1d01299e639bc33504cf69c865" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category_entity"("sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "FK_97a9e9f7c836fbfbec03ac9cc0a" FOREIGN KEY ("subSubCategoryId") REFERENCES "sub_sub_category_entity"("sub_sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments_entity" ADD CONSTRAINT "FK_ae490dc049f6626c4b6fdaa0a22" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ADD CONSTRAINT "FK_f0323f7fe6e2e72fe14c4841a8c" FOREIGN KEY ("commentsId") REFERENCES "comments_entity"("comment_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" ADD CONSTRAINT "FK_0a321d6bb9ba0be453f6f75ed5a" FOREIGN KEY ("custommersEntityCustommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" ADD CONSTRAINT "FK_797b5acdd0749cad4ded83c9004" FOREIGN KEY ("productsEntityProductId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" DROP CONSTRAINT "FK_797b5acdd0749cad4ded83c9004"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" DROP CONSTRAINT "FK_0a321d6bb9ba0be453f6f75ed5a"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" DROP CONSTRAINT "FK_f0323f7fe6e2e72fe14c4841a8c"`);
        await queryRunner.query(`ALTER TABLE "comments_entity" DROP CONSTRAINT "FK_ae490dc049f6626c4b6fdaa0a22"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "FK_97a9e9f7c836fbfbec03ac9cc0a"`);
        await queryRunner.query(`ALTER TABLE "sub_sub_category_entity" DROP CONSTRAINT "FK_c1d01299e639bc33504cf69c865"`);
        await queryRunner.query(`ALTER TABLE "sub_category_entity" DROP CONSTRAINT "FK_58285a1282fee1ba7efe812c2fa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_797b5acdd0749cad4ded83c900"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0a321d6bb9ba0be453f6f75ed5"`);
        await queryRunner.query(`DROP TABLE "custommers_entity_product_products_entity"`);
        await queryRunner.query(`DROP TABLE "custommers_entity"`);
        await queryRunner.query(`DROP TABLE "comments_entity"`);
        await queryRunner.query(`DROP TABLE "products_entity"`);
        await queryRunner.query(`DROP TABLE "sub_sub_category_entity"`);
        await queryRunner.query(`DROP TABLE "sub_category_entity"`);
        await queryRunner.query(`DROP TABLE "categories_entity"`);
    }
}
exports.table1675270124124 = table1675270124124;
