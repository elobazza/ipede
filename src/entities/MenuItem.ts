import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity("itemcardapio")
class MenuItem {

    @PrimaryGeneratedColumn('increment')
    readonly id_itemcardapio: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    valor_unitario: number;
}

export { MenuItem }