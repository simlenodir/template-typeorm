"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675398083697 = void 0;
class table1675398083697 {
    name = 'table1675398083697';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "comments_entity" ADD "custommerId" uuid`);
        await queryRunner.query(`ALTER TABLE "comments_entity" ADD CONSTRAINT "FK_ed3f0d820616dd38788d7137aad" FOREIGN KEY ("custommerId") REFERENCES "custommers_entity"("custommer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "comments_entity" DROP CONSTRAINT "FK_ed3f0d820616dd38788d7137aad"`);
        await queryRunner.query(`ALTER TABLE "comments_entity" DROP COLUMN "custommerId"`);
    }
}
exports.table1675398083697 = table1675398083697;
