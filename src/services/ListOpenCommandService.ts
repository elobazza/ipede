import { getCustomRepository } from "typeorm";
import { CommandRepositories } from "../repositories/CommandRepositories";

class ListOpenCommandService {
    async execute() {
        const commandRepositories = getCustomRepository(CommandRepositories);

        const command = await commandRepositories.find({
            situacao: 1
        });

        return command;
    }
}

export { ListOpenCommandService };