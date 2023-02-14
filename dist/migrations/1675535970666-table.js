"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675535970666 = void 0;
class table1675535970666 {
    name = 'table1675535970666';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" ADD "likes" integer array`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP COLUMN "likes"`);
    }
}
exports.table1675535970666 = table1675535970666;
