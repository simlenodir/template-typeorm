"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675551464677 = void 0;
class table1675551464677 {
    name = 'table1675551464677';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" RENAME COLUMN "discount" TO "discont"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "discont"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "discont" integer NOT NULL DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "discont"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "discont" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "products_entity" RENAME COLUMN "discont" TO "discount"`);
    }
}
exports.table1675551464677 = table1675551464677;
