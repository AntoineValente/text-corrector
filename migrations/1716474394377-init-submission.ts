import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSubmission1716474394377 implements MigrationInterface {
    name = 'InitSubmission1716474394377'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "text_submission" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dd2bcc283818f520db093c16065" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "flagged_token_kind_enum" AS ENUM('CONJUGATION', 'NUMBER', 'GENDER_AGREEMENT', 'SPELLING', 'PUNCTUATION', 'WORD_CHOICE', 'SYNTAX')`);
        await queryRunner.query(`CREATE TABLE "flagged_token" ("id" SERIAL NOT NULL, "offset" integer NOT NULL, "length" integer NOT NULL, "suggestion" character varying NOT NULL, "reason" character varying NOT NULL, "kind" "flagged_token_kind_enum" NOT NULL, CONSTRAINT "PK_7d970c808b689af3b75540d9d3a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "flagged_token"`);
        await queryRunner.query(`DROP TYPE "flagged_token_kind_enum"`);
        await queryRunner.query(`DROP TABLE "text_submission"`);
    }

}
