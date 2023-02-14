"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1676368082083 = void 0;
class table1676368082083 {
    name = 'table1676368082083';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), "user_name" character varying(50) NOT NULL, "user_img" character varying NOT NULL, "user_phone" character varying NOT NULL, "user_email" character varying NOT NULL, "user_pol" boolean NOT NULL DEFAULT true, "user_password" character varying NOT NULL, CONSTRAINT "UQ_e5ba3eae441160d91a30fe89096" UNIQUE ("user_phone"), CONSTRAINT "UQ_643a0bfb9391001cf11e581bdd6" UNIQUE ("user_email"), CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.table1676368082083 = table1676368082083;
