"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675550350011 = void 0;
class table1675550350011 {
    name = 'table1675550350011';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "discount" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "discount" boolean NOT NULL DEFAULT true`);
    }
}
exports.table1675550350011 = table1675550350011;
