"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675566755934 = void 0;
class table1675566755934 {
    name = 'table1675566755934';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" ADD "count_stars" integer`);
        await queryRunner.query(`ALTER TABLE "rate" ADD "avarage_stars" integer`);
        await queryRunner.query(`ALTER TABLE "rate" ALTER COLUMN "stars" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" ALTER COLUMN "stars" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "rate" DROP COLUMN "avarage_stars"`);
        await queryRunner.query(`ALTER TABLE "rate" DROP COLUMN "count_stars"`);
    }
}
exports.table1675566755934 = table1675566755934;
