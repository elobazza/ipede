import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity("administrador")
class Administrator {

    @PrimaryGeneratedColumn('increment')
    readonly idAdministrador: string;

    @Column()
    login: string;

    @Column()
    senha: string;
}

export { Administrator }