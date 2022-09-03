import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1662193308174 implements MigrationInterface {
    name = 'Test1662193308174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."connection_invitation_status_enum" AS ENUM('pending', 'accepted', 'rejected', 'cancelled')`);
        await queryRunner.query(`CREATE TABLE "connection_invitation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "status" "public"."connection_invitation_status_enum" NOT NULL DEFAULT 'pending', "memberId" uuid NOT NULL, CONSTRAINT "PK_a0591f830f32455a4ffabdd9728" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "text" character varying NOT NULL, "totalLikes" integer NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "connection_invitation" ADD CONSTRAINT "FK_cce1ff98d3e0642fda209884248" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "connection_invitation" DROP CONSTRAINT "FK_cce1ff98d3e0642fda209884248"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "connection_invitation"`);
        await queryRunner.query(`DROP TYPE "public"."connection_invitation_status_enum"`);
    }

}
