import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity("administrador")
class Administrator {

    @PrimaryGeneratedColumn('increment')
    readonly id_administrador: string;

    @Column()
    login: string;

    @Column()
    senha: string;
}

export { Administrator }