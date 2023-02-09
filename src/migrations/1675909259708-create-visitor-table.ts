import { MigrationInterface, QueryRunner } from "typeorm";

export class createVisitorTable1675909259708 implements MigrationInterface {
    name = 'createVisitorTable1675909259708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "visitors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(200) NOT NULL, "document" character varying(200) NOT NULL, CONSTRAINT "PK_d0fd6e34a516c2bb3bbec71abde" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "visitors"`);
    }

}
