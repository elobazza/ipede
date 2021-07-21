import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Timestamp,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { Command } from "./Command";

@Entity("pedido")
class Order {
    @PrimaryGeneratedColumn('increment')
    readonly id_pedido: string;

    @Column()
    situacao: number;

    @Column()
    datahora: Timestamp;

    @Column()
    observacao: string;

    @Column()
    id_comanda: string;

    @JoinColumn({ name: "id_comanda" })
    @ManyToOne(() => Command)
    command: Command;

}

export { Order }