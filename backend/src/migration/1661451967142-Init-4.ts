import {MigrationInterface, QueryRunner} from "typeorm";

export class Init41661451967142 implements MigrationInterface {
    name = 'Init41661451967142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."profile_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "profilePicture" character varying, "coverPhoto" character varying, "gender" "public"."profile_gender_enum" NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "member" ADD "profileId" uuid`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "UQ_b9bb63f508aa958461750fb21db" UNIQUE ("profileId")`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_b9bb63f508aa958461750fb21db" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_b9bb63f508aa958461750fb21db"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "UQ_b9bb63f508aa958461750fb21db"`);
        await queryRunner.query(`ALTER TABLE "member" DROP COLUMN "profileId"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TYPE "public"."profile_gender_enum"`);
    }

}
