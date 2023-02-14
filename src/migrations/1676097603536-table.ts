import { MigrationInterface, QueryRunner } from "typeorm";

export class table1676097603536 implements MigrationInterface {
    name = 'table1676097603536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "ratr"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "ratr" integer NOT NULL DEFAULT '0'`);
    }

}
