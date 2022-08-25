import {MigrationInterface, QueryRunner} from "typeorm";

export class Init31661450286822 implements MigrationInterface {
    name = 'Init31661450286822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."account_status_enum" AS ENUM('active', 'closed', 'canceled', 'blacklisted', 'disabled')`);
        await queryRunner.query(`ALTER TABLE "account" ADD "status" "public"."account_status_enum" NOT NULL DEFAULT 'disabled'`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845"`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "UQ_c1012c9a3cdedf2b00510cdd845" UNIQUE ("accountId")`);
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "UQ_4b8eef0e147abd2c7fa009a91dd" UNIQUE ("accountId")`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "UQ_4b8eef0e147abd2c7fa009a91dd"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "UQ_c1012c9a3cdedf2b00510cdd845"`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."account_status_enum"`);
        await queryRunner.query(`ALTER TABLE "account" ADD "status" character varying NOT NULL`);
    }

}
