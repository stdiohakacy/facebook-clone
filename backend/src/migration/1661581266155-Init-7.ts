import {MigrationInterface, QueryRunner} from "typeorm";

export class Init71661581266155 implements MigrationInterface {
    name = 'Init71661581266155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "description" character varying NOT NULL, "totalMember" integer NOT NULL, CONSTRAINT "PK_659d1483316afb28afd3a90646e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "memberId" uuid NOT NULL, "groupId" uuid NOT NULL, CONSTRAINT "PK_86446139b2c96bfd0f3b8638852" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member_share_post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "memberId" uuid NOT NULL, "postId" uuid NOT NULL, CONSTRAINT "PK_ab1fbc83e54a315b6e8c2b125c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "text" character varying NOT NULL, "totalLikes" integer NOT NULL, "totalShares" integer NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member_like_post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "memberId" uuid NOT NULL, "postId" uuid NOT NULL, CONSTRAINT "PK_919503705d9675464aacf059abd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "group_members" ADD CONSTRAINT "FK_198a0576d65b3e038bca49ac474" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_members" ADD CONSTRAINT "FK_1aa8d31831c3126947e7a713c2b" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_share_post" ADD CONSTRAINT "FK_202ef5628c41bf946a37caa78ed" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_share_post" ADD CONSTRAINT "FK_9c1f534065577e86e3ab7003751" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_like_post" ADD CONSTRAINT "FK_5a38bdecb341b0cfba58269b70f" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_like_post" ADD CONSTRAINT "FK_1697756625c5b3d7e9a847bfb27" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "member_like_post" DROP CONSTRAINT "FK_1697756625c5b3d7e9a847bfb27"`);
        await queryRunner.query(`ALTER TABLE "member_like_post" DROP CONSTRAINT "FK_5a38bdecb341b0cfba58269b70f"`);
        await queryRunner.query(`ALTER TABLE "member_share_post" DROP CONSTRAINT "FK_9c1f534065577e86e3ab7003751"`);
        await queryRunner.query(`ALTER TABLE "member_share_post" DROP CONSTRAINT "FK_202ef5628c41bf946a37caa78ed"`);
        await queryRunner.query(`ALTER TABLE "group_members" DROP CONSTRAINT "FK_1aa8d31831c3126947e7a713c2b"`);
        await queryRunner.query(`ALTER TABLE "group_members" DROP CONSTRAINT "FK_198a0576d65b3e038bca49ac474"`);
        await queryRunner.query(`DROP TABLE "member_like_post"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "member_share_post"`);
        await queryRunner.query(`DROP TABLE "group_members"`);
        await queryRunner.query(`DROP TABLE "groups"`);
    }

}
