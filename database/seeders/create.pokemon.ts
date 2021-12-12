import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Pokemon } from '../../src/entities/Pokemon'

export default class CreatePokemon implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Pokemon)
            .values([
                { name: 'Pikachu', ability: 'Static', type: 'Eletric' },
            ])
            .execute()
    }
}