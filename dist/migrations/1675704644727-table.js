"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675704644727 = void 0;
class table1675704644727 {
    name = 'table1675704644727';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" ADD "stoars" integer`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" DROP COLUMN "stoars"`);
    }
}
exports.table1675704644727 = table1675704644727;
