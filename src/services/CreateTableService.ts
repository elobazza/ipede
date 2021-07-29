import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { TableRepositories } from "../repositories/TableRepositories";

interface ITableRequest {
    login: string;
    senha: string;
    numero: number;
}

class CreateTableService {
    async execute({ login, senha, numero }: ITableRequest) {
        const tableRepository = getCustomRepository(TableRepositories);

        if (!login) {
            throw new Error("Login incorrect");
        }

        const tableAlreadyExists = await tableRepository.findOne({
            login,
        });

        if (tableAlreadyExists) {
            throw new Error("Table already exists");
        }


        const passwordHash = await hash(senha, 8);

        const table = tableRepository.create({
            login, senha: passwordHash, numero
        });

        await tableRepository.save(table);

        return table;
    }
}

export { CreateTableService };