"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675703667680 = void 0;
class table1675703667680 {
    name = 'table1675703667680';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "rate"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "time" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "sold_count" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "sold_count" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "rate" integer`);
    }
}
exports.table1675703667680 = table1675703667680;
