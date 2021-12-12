import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pokemon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ability: string;

    @Column()
    type: string;

}
