import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1661618680718 implements MigrationInterface {
    name = 'Initialize1661618680718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "accountId" uuid, CONSTRAINT "REL_4b2f4349a0685c4b427b2c9deb" UNIQUE ("accountId"), CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."account_status_enum" AS ENUM('active', 'closed', 'canceled', 'blacklisted', 'disabled')`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "status" "public"."account_status_enum" NOT NULL DEFAULT 'disabled', "password" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "groups" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "totalMember" integer NOT NULL, CONSTRAINT "PK_659d1483316afb28afd3a90646e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "group_members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "memberId" uuid NOT NULL, "groupId" uuid NOT NULL, CONSTRAINT "PK_86446139b2c96bfd0f3b8638852" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member_share_post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "memberId" uuid NOT NULL, "postId" uuid NOT NULL, CONSTRAINT "PK_ab1fbc83e54a315b6e8c2b125c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "text" character varying NOT NULL, "totalLikes" integer NOT NULL, "totalShares" integer NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member_like_post" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "memberId" uuid NOT NULL, "postId" uuid NOT NULL, CONSTRAINT "PK_919503705d9675464aacf059abd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "messages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "sendTo" text NOT NULL, "messageBody" character varying NOT NULL, "memberId" uuid NOT NULL, CONSTRAINT "PK_18325f38ae6de43878487eff986" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "dateOfMemberShip" TIMESTAMP WITH TIME ZONE, "accountId" uuid, "profileId" uuid, CONSTRAINT "REL_c1012c9a3cdedf2b00510cdd84" UNIQUE ("accountId"), CONSTRAINT "REL_b9bb63f508aa958461750fb21d" UNIQUE ("profileId"), CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id")) INHERITS ("persons")`);
        await queryRunner.query(`CREATE TABLE "works" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "title" character varying NOT NULL, "company" character varying NOT NULL, "location" character varying NOT NULL, "fromDate" TIMESTAMP WITH TIME ZONE NOT NULL, "toDate" TIMESTAMP WITH TIME ZONE NOT NULL, "description" character varying NOT NULL, "profileId" uuid NOT NULL, CONSTRAINT "PK_a9ffbf516ba6e52604b29e5cce0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."profile_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "profilePicture" character varying, "coverPhoto" character varying, "gender" "public"."profile_gender_enum" NOT NULL, "worksId" uuid, "educationsId" uuid, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "educations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "school" character varying NOT NULL, "degree" character varying NOT NULL, "fromYear" character varying NOT NULL, "toYear" character varying NOT NULL, "description" character varying NOT NULL, "profileId" uuid, CONSTRAINT "PK_09d2f29e7f6f31f5c01d79d2dbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "places" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "name" character varying NOT NULL, "profileId" uuid NOT NULL, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" uuid NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" uuid NOT NULL, "deletedAt" TIMESTAMP WITH TIME ZONE, "deletedBy" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "accountId" uuid, CONSTRAINT "REL_4b8eef0e147abd2c7fa009a91d" UNIQUE ("accountId"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id")) INHERITS ("persons")`);
        await queryRunner.query(`ALTER TABLE "persons" ADD CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_members" ADD CONSTRAINT "FK_198a0576d65b3e038bca49ac474" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "group_members" ADD CONSTRAINT "FK_1aa8d31831c3126947e7a713c2b" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_share_post" ADD CONSTRAINT "FK_202ef5628c41bf946a37caa78ed" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_share_post" ADD CONSTRAINT "FK_9c1f534065577e86e3ab7003751" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_like_post" ADD CONSTRAINT "FK_5a38bdecb341b0cfba58269b70f" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member_like_post" ADD CONSTRAINT "FK_1697756625c5b3d7e9a847bfb27" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "messages" ADD CONSTRAINT "FK_d97799f977ce7ec3bcdf5691d25" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_b9bb63f508aa958461750fb21db" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "works" ADD CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_39ed85d0fc33ee239162b4e2558" FOREIGN KEY ("worksId") REFERENCES "works"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_fb6f934cb1daef365dd8812aafa" FOREIGN KEY ("educationsId") REFERENCES "educations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "educations" ADD CONSTRAINT "FK_f1fcc44bdcb9e0a13c498a8895e" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "places" ADD CONSTRAINT "FK_404e71cbc603004f48c4893ef6f" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_4b8eef0e147abd2c7fa009a91dd"`);
        await queryRunner.query(`ALTER TABLE "places" DROP CONSTRAINT "FK_404e71cbc603004f48c4893ef6f"`);
        await queryRunner.query(`ALTER TABLE "educations" DROP CONSTRAINT "FK_f1fcc44bdcb9e0a13c498a8895e"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_fb6f934cb1daef365dd8812aafa"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_39ed85d0fc33ee239162b4e2558"`);
        await queryRunner.query(`ALTER TABLE "works" DROP CONSTRAINT "FK_2d8c3764af1c2f35e55b3c2ad8f"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_b9bb63f508aa958461750fb21db"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_c1012c9a3cdedf2b00510cdd845"`);
        await queryRunner.query(`ALTER TABLE "messages" DROP CONSTRAINT "FK_d97799f977ce7ec3bcdf5691d25"`);
        await queryRunner.query(`ALTER TABLE "member_like_post" DROP CONSTRAINT "FK_1697756625c5b3d7e9a847bfb27"`);
        await queryRunner.query(`ALTER TABLE "member_like_post" DROP CONSTRAINT "FK_5a38bdecb341b0cfba58269b70f"`);
        await queryRunner.query(`ALTER TABLE "member_share_post" DROP CONSTRAINT "FK_9c1f534065577e86e3ab7003751"`);
        await queryRunner.query(`ALTER TABLE "member_share_post" DROP CONSTRAINT "FK_202ef5628c41bf946a37caa78ed"`);
        await queryRunner.query(`ALTER TABLE "group_members" DROP CONSTRAINT "FK_1aa8d31831c3126947e7a713c2b"`);
        await queryRunner.query(`ALTER TABLE "group_members" DROP CONSTRAINT "FK_198a0576d65b3e038bca49ac474"`);
        await queryRunner.query(`ALTER TABLE "persons" DROP CONSTRAINT "FK_4b2f4349a0685c4b427b2c9debb"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "places"`);
        await queryRunner.query(`DROP TABLE "educations"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TYPE "public"."profile_gender_enum"`);
        await queryRunner.query(`DROP TABLE "works"`);
        await queryRunner.query(`DROP TABLE "member"`);
        await queryRunner.query(`DROP TABLE "messages"`);
        await queryRunner.query(`DROP TABLE "member_like_post"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "member_share_post"`);
        await queryRunner.query(`DROP TABLE "group_members"`);
        await queryRunner.query(`DROP TABLE "groups"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TYPE "public"."account_status_enum"`);
        await queryRunner.query(`DROP TABLE "persons"`);
    }
}
