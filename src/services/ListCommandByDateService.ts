import { getCustomRepository } from "typeorm";
import { CommandRepositories } from "../repositories/CommandRepositories";

class ListCommandByDateService {
    async execute(dataAbertura: string) {
        const commandRepositories = getCustomRepository(CommandRepositories);

        const command = await commandRepositories.find({
            dataAbertura
        });

        return command;
    }
}

export { ListCommandByDateService };