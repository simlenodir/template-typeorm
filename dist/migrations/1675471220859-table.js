"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675471220859 = void 0;
class table1675471220859 {
    name = 'table1675471220859';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "rate" ("rate_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "stars" integer NOT NULL, CONSTRAINT "PK_723a17c52b0c6cc554b6f71571a" PRIMARY KEY ("rate_id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "rate"`);
    }
}
exports.table1675471220859 = table1675471220859;
