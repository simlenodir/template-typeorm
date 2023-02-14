"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675559682117 = void 0;
class table1675559682117 {
    name = 'table1675559682117';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "price" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ALTER COLUMN "price" DROP NOT NULL`);
    }
}
exports.table1675559682117 = table1675559682117;
