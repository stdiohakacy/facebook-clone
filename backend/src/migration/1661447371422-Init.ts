import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1661447371422 implements MigrationInterface {
    name = 'Init1661447371422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "dateOfMemberShip" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id")) INHERITS ("persons")`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id")) INHERITS ("persons")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "member"`);
        await queryRunner.query(`DROP TABLE "persons"`);
    }

}