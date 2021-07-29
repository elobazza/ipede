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
    readonly idPedido: string;

    @Column()
    situacao: number;

    @Column()
    data: string;

    @Column()
    hora: string;

    @Column()
    observacao: string;

    @Column()
    idComanda: string;

    @JoinColumn({ name: "idComanda" })
    @ManyToOne(() => Command)
    command: Command;

}

export { Order }