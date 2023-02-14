"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1676097603536 = void 0;
class table1676097603536 {
    name = 'table1676097603536';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "ratr"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" ADD "ratr" integer NOT NULL DEFAULT '0'`);
    }
}
exports.table1676097603536 = table1676097603536;
