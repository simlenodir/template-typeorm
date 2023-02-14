"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675641722996 = void 0;
class table1675641722996 {
    name = 'table1675641722996';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" DROP COLUMN "avarage_stars"`);
        await queryRunner.query(`ALTER TABLE "rate" ADD "avarage_stars" numeric`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" DROP COLUMN "avarage_stars"`);
        await queryRunner.query(`ALTER TABLE "rate" ADD "avarage_stars" integer`);
    }
}
exports.table1675641722996 = table1675641722996;
