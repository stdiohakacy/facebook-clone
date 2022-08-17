import {MigrationInterface, QueryRunner} from "typeorm";

export class UserModel1660732771766 implements MigrationInterface {
    name = 'UserModel1660732771766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_accountstatus_enum" AS ENUM('active', 'closed', 'canceled', 'blacklisted', 'disabled')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "streetAddress" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "zipCode" character varying NOT NULL, "country" character varying NOT NULL, "dateOfMembership" date, "accountStatus" "public"."user_accountstatus_enum" NOT NULL, "password" character varying NOT NULL, "profilePicture" character varying NOT NULL, "coverPhoto" character varying NOT NULL, "gender" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_accountstatus_enum"`);
    }

}
