import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1716656660220 implements MigrationInterface {
    name = 'Init1716656660220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."flagged_token_kind_enum" AS ENUM('CONJUGATION', 'SPELLING', 'GRAMMAR', 'PUNCTUATION', 'WORD_CHOICE', 'SYNTAX')`);
        await queryRunner.query(`CREATE TABLE "flagged_token" ("id" SERIAL NOT NULL, "startIndex" integer NOT NULL, "endIndex" integer NOT NULL, "suggestion" character varying NOT NULL, "reason" character varying NOT NULL, "kind" "public"."flagged_token_kind_enum" NOT NULL, "textSubmissionId" integer, CONSTRAINT "PK_7d970c808b689af3b75540d9d3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "text_submission" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying, CONSTRAINT "PK_dd2bcc283818f520db093c16065" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "email" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "flagged_token" ADD CONSTRAINT "FK_9bfe57c69524503c01263eebfa1" FOREIGN KEY ("textSubmissionId") REFERENCES "text_submission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "text_submission" ADD CONSTRAINT "FK_cc76791e14b7831edc6a1e6730c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "text_submission" DROP CONSTRAINT "FK_cc76791e14b7831edc6a1e6730c"`);
        await queryRunner.query(`ALTER TABLE "flagged_token" DROP CONSTRAINT "FK_9bfe57c69524503c01263eebfa1"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "text_submission"`);
        await queryRunner.query(`DROP TABLE "flagged_token"`);
        await queryRunner.query(`DROP TYPE "public"."flagged_token_kind_enum"`);
    }

}
