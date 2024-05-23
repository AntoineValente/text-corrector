import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSubmission1716471507642 implements MigrationInterface {
  name = 'InitSubmission1716471507642';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "text_submission_schema" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c4828dc36cfec7e3971c650b666" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."flagged_token_schema_kind_enum" AS ENUM('CONJUGATION', 'NUMBER', 'GENDER_AGREEMENT', 'SPELLING', 'PUNCTUATION', 'WORD_CHOICE', 'SYNTAX')`,
    );
    await queryRunner.query(
      `CREATE TABLE "flagged_token_schema" ("id" SERIAL NOT NULL, "offset" integer NOT NULL, "length" integer NOT NULL, "suggestion" character varying NOT NULL, "reason" character varying NOT NULL, "kind" "public"."flagged_token_schema_kind_enum" NOT NULL, CONSTRAINT "PK_bf32bd071848c0038fce336fa0f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "flagged_token_schema"`);
    await queryRunner.query(
      `DROP TYPE "public"."flagged_token_schema_kind_enum"`,
    );
    await queryRunner.query(`DROP TABLE "text_submission_schema"`);
  }
}
