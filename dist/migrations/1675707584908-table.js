"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675707584908 = void 0;
class table1675707584908 {
    name = 'table1675707584908';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers" ADD CONSTRAINT "UQ_0cbabf8c1b8abf62238f8e34078" UNIQUE ("email")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers" DROP CONSTRAINT "UQ_0cbabf8c1b8abf62238f8e34078"`);
    }
}
exports.table1675707584908 = table1675707584908;
