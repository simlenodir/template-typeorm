"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675271102558 = void 0;
class table1675271102558 {
    name = 'table1675271102558';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "size" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "netto" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "author" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "author" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "netto" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "size" SET NOT NULL`);
    }
}
exports.table1675271102558 = table1675271102558;
