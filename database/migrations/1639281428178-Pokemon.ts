import { MigrationInterface, Table, QueryRunner } from "typeorm";

export class Pokemon1639281428178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pokemon",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "ability",
                    type: "varchar",
                },
                {
                    name: "type",
                    type: "varchar",
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('pokemon');
    }

}
