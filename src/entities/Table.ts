import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity("mesa")
class Table {

    @PrimaryGeneratedColumn('increment')
    readonly idMesa: string;

    @Column()
    login: string;

    @Column()
    senha: string;

    @Column()
    numero: number;
}

export { Table }