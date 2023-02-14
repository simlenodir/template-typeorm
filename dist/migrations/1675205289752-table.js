"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675205289752 = void 0;
class table1675205289752 {
    name = 'table1675205289752';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "custommers_entity_product_products_entity" ("custommersEntityCustommerId" uuid NOT NULL, "productsEntityProductId" uuid NOT NULL, CONSTRAINT "PK_b2ad8a6a999ba32c5b2f7c244a1" PRIMARY KEY ("custommersEntityCustommerId", "productsEntityProductId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0a321d6bb9ba0be453f6f75ed5" ON "custommers_entity_product_products_entity" ("custommersEntityCustommerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_797b5acdd0749cad4ded83c900" ON "custommers_entity_product_products_entity" ("productsEntityProductId") `);
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" ADD CONSTRAINT "FK_0a321d6bb9ba0be453f6f75ed5a" FOREIGN KEY ("custommersEntityCustommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" ADD CONSTRAINT "FK_797b5acdd0749cad4ded83c9004" FOREIGN KEY ("productsEntityProductId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" DROP CONSTRAINT "FK_797b5acdd0749cad4ded83c9004"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity_product_products_entity" DROP CONSTRAINT "FK_0a321d6bb9ba0be453f6f75ed5a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_797b5acdd0749cad4ded83c900"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0a321d6bb9ba0be453f6f75ed5"`);
        await queryRunner.query(`DROP TABLE "custommers_entity_product_products_entity"`);
    }
}
exports.table1675205289752 = table1675205289752;
