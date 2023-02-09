import { MigrationInterface, QueryRunner } from "typeorm";

export class createVisitTable1675949926743 implements MigrationInterface {
    name = 'createVisitTable1675949926743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "visits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "badge" character varying(3) NOT NULL, "secretary" character varying(20) NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_0b0b322289a41015c6ea4e8bf30" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "visits"`);
    }

}
