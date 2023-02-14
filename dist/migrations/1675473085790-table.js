"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675473085790 = void 0;
class table1675473085790 {
    name = 'table1675473085790';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "FK_4fe984f47297f32a9b152f7e375"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "UQ_4fe984f47297f32a9b152f7e375"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "ratingId"`);
        await queryRunner.query(`ALTER TABLE "rate" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "rate" ADD CONSTRAINT "UQ_fab2aea3fd944f2090161edf5c4" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "rate" ADD CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4" FOREIGN KEY ("productId") REFERENCES "products_entity"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "rate" DROP CONSTRAINT "FK_fab2aea3fd944f2090161edf5c4"`);
        await queryRunner.query(`ALTER TABLE "rate" DROP CONSTRAINT "UQ_fab2aea3fd944f2090161edf5c4"`);
        await queryRunner.query(`ALTER TABLE "rate" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "ratingId" uuid`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "UQ_4fe984f47297f32a9b152f7e375" UNIQUE ("ratingId")`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "FK_4fe984f47297f32a9b152f7e375" FOREIGN KEY ("ratingId") REFERENCES "rate"("rate_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.table1675473085790 = table1675473085790;
