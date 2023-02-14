"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675705189093 = void 0;
class table1675705189093 {
    name = 'table1675705189093';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" DROP COLUMN "stoars"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" ADD "stoars" integer`);
    }
}
exports.table1675705189093 = table1675705189093;
