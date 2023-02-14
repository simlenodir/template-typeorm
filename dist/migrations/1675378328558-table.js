"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675378328558 = void 0;
class table1675378328558 {
    name = 'table1675378328558';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity" ALTER COLUMN "gender" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ALTER COLUMN "avatar" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ALTER COLUMN "gender" SET NOT NULL`);
    }
}
exports.table1675378328558 = table1675378328558;
