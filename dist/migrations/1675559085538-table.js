"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675559085538 = void 0;
class table1675559085538 {
    name = 'table1675559085538';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "discont_price" numeric NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "price" numeric`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "discont_price"`);
    }
}
exports.table1675559085538 = table1675559085538;
