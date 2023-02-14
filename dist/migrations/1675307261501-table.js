"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675307261501 = void 0;
class table1675307261501 {
    name = 'table1675307261501';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ADD "last_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ADD "gender" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ADD "name" character varying NOT NULL`);
    }
}
exports.table1675307261501 = table1675307261501;
