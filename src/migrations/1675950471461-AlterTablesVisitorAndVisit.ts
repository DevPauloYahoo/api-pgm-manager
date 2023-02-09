import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTablesVisitorAndVisit1675950471461 implements MigrationInterface {
    name = 'AlterTablesVisitorAndVisit1675950471461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visits" ADD "visitor_id" uuid`);
        await queryRunner.query(`ALTER TABLE "visits" ADD CONSTRAINT "fk_visitor" FOREIGN KEY ("visitor_id") REFERENCES "visitors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visits" DROP CONSTRAINT "fk_visitor"`);
        await queryRunner.query(`ALTER TABLE "visits" DROP COLUMN "visitor_id"`);
    }

}
