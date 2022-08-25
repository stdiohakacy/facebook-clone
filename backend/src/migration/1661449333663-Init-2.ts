import {MigrationInterface, QueryRunner} from "typeorm";

export class Init21661449333663 implements MigrationInterface {
    name = 'Init21661449333663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "status" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "accountId" uuid`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "UQ_4b2f4349a0685c4b427b2c9debb" UNIQUE ("accountId")`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "UQ_4b2f4349a0685c4b427b2c9debb"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "accountId"`);
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
