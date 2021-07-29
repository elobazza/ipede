import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity("itemcardapio")
class MenuItem {

    @PrimaryGeneratedColumn('increment')
    readonly idItemCardapio: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    valorUnitario: number;
}

export { MenuItem }