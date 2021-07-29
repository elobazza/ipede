import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { MenuItem } from "./MenuItem";
import { Order } from "./Order";

@Entity("itempedido")
class OrderItem {

    @PrimaryGeneratedColumn('increment')
    readonly idItemPedido: string;

    @Column()
    quantidade: number;

    @Column()
    idItemCardapio: string;

    @JoinColumn({ name: "idItemCardapio" })
    @ManyToOne(() => MenuItem)
    menuItem: MenuItem;

    @Column()
    idPedido: string;

    @JoinColumn({ name: "idPedido" })
    @ManyToOne(() => MenuItem)
    order: Order;
}

export { OrderItem }