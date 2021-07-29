import { getCustomRepository } from "typeorm";
import { TableRepositories } from "../repositories/TableRepositories";

class ListTableService {
    async execute() {
        const tableRepositories = getCustomRepository(TableRepositories);

        const tables = await tableRepositories.find();

        return tables;
    }
}

export { ListTableService };