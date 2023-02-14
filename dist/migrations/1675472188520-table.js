"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675472188520 = void 0;
class table1675472188520 {
    name = 'table1675472188520';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "ratingId" uuid`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "UQ_4fe984f47297f32a9b152f7e375" UNIQUE ("ratingId")`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "FK_4fe984f47297f32a9b152f7e375" FOREIGN KEY ("ratingId") REFERENCES "rate"("rate_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "FK_4fe984f47297f32a9b152f7e375"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "UQ_4fe984f47297f32a9b152f7e375"`);
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "ratingId"`);
    }
}
exports.table1675472188520 = table1675472188520;
