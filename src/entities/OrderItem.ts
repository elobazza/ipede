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
    readonly id_itempedido: string;

    @Column()
    quantidade: number;

    @Column()
    id_itemcardapio: string;

    @JoinColumn({ name: "id_itemcardapio" })
    @ManyToOne(() => MenuItem)
    menuItem: MenuItem;

    @Column()
    id_pedido: string;

    @JoinColumn({ name: "id_pedido" })
    @ManyToOne(() => MenuItem)
    order: Order;
}

export { OrderItem }