import { getCustomRepository } from "typeorm";
import { CommandRepositories } from "../repositories/CommandRepositories";

class CloseCommandService {
    async execute(id: string) {
        const commandRepositories = getCustomRepository(CommandRepositories);

        const idComanda = id;

        const oldCommand = await commandRepositories.findOne({
            idComanda
        });

        const newCommand = oldCommand;
        newCommand.situacao = 2;

        await commandRepositories.update(idComanda, newCommand);
    }
}

export { CloseCommandService };