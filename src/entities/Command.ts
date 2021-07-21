import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Timestamp,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { Table } from "./Table";

@Entity("comanda")
class Command {

    @PrimaryGeneratedColumn('increment')
    readonly id_comanda: string;

    @Column()
    nome_cliente: string;

    @Column()
    situacao: number;

    @Column()
    abertura: Timestamp;

    @Column()
    fechamento: Timestamp;

    @Column()
    id_mesa: string;

    @JoinColumn({ name: "id_mesa" })
    @ManyToOne(() => Table)
    table: Table;

}

export { Command }