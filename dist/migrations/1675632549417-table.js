"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675632549417 = void 0;
class table1675632549417 {
    name = 'table1675632549417';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "orders" ("order_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "count" integer DEFAULT '0', "custommerId" uuid, "productId" uuid, CONSTRAINT "REL_7eeb079b8c1432a8b575fb4be1" UNIQUE ("custommerId"), CONSTRAINT "REL_8624dad595ae567818ad9983b3" UNIQUE ("productId"), CONSTRAINT "PK_cad55b3cb25b38be94d2ce831db" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "sold_count" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16" FOREIGN KEY ("custommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_8624dad595ae567818ad9983b33"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7eeb079b8c1432a8b575fb4be16"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "sold_count"`);
        await queryRunner.query(`DROP TABLE "orders"`);
    }
}
exports.table1675632549417 = table1675632549417;
