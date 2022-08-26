import {MigrationInterface, QueryRunner} from "typeorm";

export class Init61661530129818 implements MigrationInterface {
    name = 'Init61661530129818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "educations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "school" character varying NOT NULL, "degree" character varying NOT NULL, "fromYear" character varying NOT NULL, "toYear" character varying NOT NULL, "description" character varying NOT NULL, "profileId" uuid, CONSTRAINT "PK_09d2f29e7f6f31f5c01d79d2dbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "educationsId" uuid`);
        await queryRunner.query(`ALTER TABLE "works" DROP CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f"`);
        await queryRunner.query(`ALTER TABLE "works" ALTER COLUMN "profileId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "works" ADD CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_fb6f934cb1daef365dd8812aafa" FOREIGN KEY ("educationsId") REFERENCES "educations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "educations" ADD CONSTRAINT "FK_f1fcc44bdcb9e0a13c498a8895e" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "educations" DROP CONSTRAINT "FK_f1fcc44bdcb9e0a13c498a8895e"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_fb6f934cb1daef365dd8812aafa"`);
        await queryRunner.query(`ALTER TABLE "works" DROP CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f"`);
        await queryRunner.query(`ALTER TABLE "works" ALTER COLUMN "profileId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "works" ADD CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "educationsId"`);
        await queryRunner.query(`DROP TABLE "educations"`);
    }

}
