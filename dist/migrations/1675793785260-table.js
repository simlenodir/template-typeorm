"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675793785260 = void 0;
class table1675793785260 {
    name = 'table1675793785260';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" ADD "ratr" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "ratr"`);
    }
}
exports.table1675793785260 = table1675793785260;
