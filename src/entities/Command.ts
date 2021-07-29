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
    readonly idComanda: string;

    @Column()
    nomeCliente: string;

    @Column()
    situacao: number;

    @Column()
    dataAbertura: string;

    @Column()
    horaAbertura: string;

    @Column()
    dataFechamento: string;

    @Column()
    horaFechamento: string;

    @Column()
    idMesa: string;

    @JoinColumn({ name: "idMesa" })
    @ManyToOne(() => Table)
    table: Table;

}

export { Command }