import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterStatusFieldVisitTable1675982358851 implements MigrationInterface {
    name = 'AlterStatusFieldVisitTable1675982358851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visits" ALTER COLUMN "status" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "visits" ALTER COLUMN "status" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visits" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "visits" ALTER COLUMN "status" SET NOT NULL`);
    }

}
