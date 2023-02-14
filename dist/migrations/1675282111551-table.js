"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table1675282111551 = void 0;
class table1675282111551 {
    name = 'table1675282111551';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "FK_97a9e9f7c836fbfbec03ac9cc0a"`);
        await queryRunner.query(`ALTER TABLE "products_entity" RENAME COLUMN "subSubCategoryId" TO "subSubCategoryIdId"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "FK_e5b98fa83d3018c4041bfaece1d" FOREIGN KEY ("subSubCategoryIdId") REFERENCES "sub_sub_category_entity"("sub_sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products_entity" DROP CONSTRAINT "FK_e5b98fa83d3018c4041bfaece1d"`);
        await queryRunner.query(`ALTER TABLE "products_entity" RENAME COLUMN "subSubCategoryIdId" TO "subSubCategoryId"`);
        await queryRunner.query(`ALTER TABLE "products_entity" ADD CONSTRAINT "FK_97a9e9f7c836fbfbec03ac9cc0a" FOREIGN KEY ("subSubCategoryId") REFERENCES "sub_sub_category_entity"("sub_sub_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.table1675282111551 = table1675282111551;
