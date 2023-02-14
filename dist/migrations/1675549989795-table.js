"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675549989795 = void 0;
class table1675549989795 {
    name = 'table1675549989795';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "likes"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "on_sale" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "discount" boolean NOT NULL DEFAULT true`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "on_sale"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "likes" integer array`);
    }
}
exports.table1675549989795 = table1675549989795;
