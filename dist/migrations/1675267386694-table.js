"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675267386694 = void 0;
class table1675267386694 {
    name = 'table1675267386694';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "rate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "brand" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "color" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "img1" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "img2" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "img2" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "img1" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "color" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "brand" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "rate" SET NOT NULL`);
    }
}
exports.table1675267386694 = table1675267386694;
