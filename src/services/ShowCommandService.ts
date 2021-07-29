import { getCustomRepository } from "typeorm";
import { CommandRepositories } from "../repositories/CommandRepositories";

class ShowCommandService {
    async execute(idComanda: string) {
        const commandRepositories = getCustomRepository(CommandRepositories);

        const command = await commandRepositories.find({
            idComanda
        });

        return command;
    }
}

export { ShowCommandService };