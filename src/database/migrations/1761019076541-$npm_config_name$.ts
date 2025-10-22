import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName$1761019076541 implements MigrationInterface {
    name = ' $npmConfigName$1761019076541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
