import {MigrationInterface, QueryRunner} from "typeorm";

export class Init51661529313750 implements MigrationInterface {
    name = 'Init51661529313750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "works" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "title" character varying NOT NULL, "company" character varying NOT NULL, "location" character varying NOT NULL, "fromDate" TIMESTAMP WITH TIME ZONE NOT NULL, "toDate" TIMESTAMP WITH TIME ZONE NOT NULL, "description" character varying NOT NULL, "profileId" uuid, CONSTRAINT "PK_a9ffbf516ba6e52604b29e5cce0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "profile" ADD "worksId" uuid`);
        await queryRunner.query(`ALTER TABLE "works" ADD CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_39ed85d0fc33ee239162b4e2558" FOREIGN KEY ("worksId") REFERENCES "works"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_39ed85d0fc33ee239162b4e2558"`);
        await queryRunner.query(`ALTER TABLE "works" DROP CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP COLUMN "worksId"`);
        await queryRunner.query(`DROP TABLE "works"`);
    }

}
