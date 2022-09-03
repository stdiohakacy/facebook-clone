import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1662195706972 implements MigrationInterface {
    name = 'Test1662195706972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ADD "postId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "memberId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_343ff2dc7da292bd5a2b2183b4e" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_343ff2dc7da292bd5a2b2183b4e"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_e44ddaaa6d058cb4092f83ad61f"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "memberId"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "postId"`);
    }

}
