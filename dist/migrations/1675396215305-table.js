"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675396215305 = void 0;
class table1675396215305 {
    name = 'table1675396215305';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity" DROP CONSTRAINT "FK_f0323f7fe6e2e72fe14c4841a8c"`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" DROP COLUMN "commentsId"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "custommers_entity" ADD "commentsId" uuid`);
        await queryRunner.query(`ALTER TABLE "custommers_entity" ADD CONSTRAINT "FK_f0323f7fe6e2e72fe14c4841a8c" FOREIGN KEY ("commentsId") REFERENCES "comments_entity"("comment_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.table1675396215305 = table1675396215305;
