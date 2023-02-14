"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675456249923 = void 0;
class table1675456249923 {
    name = 'table1675456249923';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "products_entity_customer_custommers_entity" ("productsEntityProductId" uuid NOT NULL, "custommersEntityCustommerId" uuid NOT NULL, CONSTRAINT "PK_e8434ac71cbbc1fd08d7bfcc8ae" PRIMARY KEY ("productsEntityProductId", "custommersEntityCustommerId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a377afbe2907689fbf555ee87f" ON "products_entity_customer_custommers_entity" ("productsEntityProductId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a6dff804cdd68c814fad0a6df8" ON "products_entity_customer_custommers_entity" ("custommersEntityCustommerId") `);
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" ADD CONSTRAINT "FK_a377afbe2907689fbf555ee87f9" FOREIGN KEY ("productsEntityProductId") REFERENCES "products_entity"("product_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" ADD CONSTRAINT "FK_a6dff804cdd68c814fad0a6df87" FOREIGN KEY ("custommersEntityCustommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" DROP CONSTRAINT "FK_a6dff804cdd68c814fad0a6df87"`);
        await queryRunner.query(`ALTER TABLE "products_entity_customer_custommers_entity" DROP CONSTRAINT "FK_a377afbe2907689fbf555ee87f9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6dff804cdd68c814fad0a6df8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a377afbe2907689fbf555ee87f"`);
        await queryRunner.query(`DROP TABLE "products_entity_customer_custommers_entity"`);
    }
}
exports.table1675456249923 = table1675456249923;
