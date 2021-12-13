import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pokemon {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    ability: string;

    @Column({ nullable: false })
    type: string;

}
