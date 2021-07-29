import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity("cozinha")
class Kitchen {

    @PrimaryGeneratedColumn('increment')
    readonly idCozinha: string;

    @Column()
    login: string;

    @Column()
    senha: string;
}

export { Kitchen }