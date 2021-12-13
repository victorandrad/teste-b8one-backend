import { MigrationInterface, QueryRunner } from "typeorm";

export class PokemonSeed1639360613673 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO `pokemon`(`name`, `ability`, `type`) VALUES (?,?,?)", ['Pikachu', 'Static', 'Eletric']);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
