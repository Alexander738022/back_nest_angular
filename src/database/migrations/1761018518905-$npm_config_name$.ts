import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName$1761018518905 implements MigrationInterface {
    name = ' $npmConfigName$1761018518905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
