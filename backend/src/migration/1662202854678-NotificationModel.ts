import {MigrationInterface, QueryRunner} from "typeorm";

export class NotificationModel1662202854678 implements MigrationInterface {
    name = 'NotificationModel1662202854678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb"`);
        await queryRunner.query(`CREATE TABLE "email_notification" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "content" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_0ebb489f20426be0ad1b2e55fc5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "push_notification" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "content" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_b7e0210528850d5f548629ed593" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "REL_4b2f4349a0685c4b427b2c9deb"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "accountId"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "accountId" uuid`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "UQ_4b2f4349a0685c4b427b2c9debb" UNIQUE ("accountId")`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "content" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "UQ_4b2f4349a0685c4b427b2c9debb"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "accountId"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "persons" ADD "accountId" uuid`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "REL_4b2f4349a0685c4b427b2c9deb" UNIQUE ("accountId")`);
        await queryRunner.query(`DROP TABLE "push_notification"`);
        await queryRunner.query(`DROP TABLE "email_notification"`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
