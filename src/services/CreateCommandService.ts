import { getCustomRepository, Timestamp } from "typeorm";
import { CommandRepositories } from "../repositories/CommandRepositories";

interface ICommandRequest {
    nomeCliente: string;
    situacao: number;
    dataAbertura: string;
    horaAbertura: string;
    idMesa: string;
}

class CreateCommandService {
    async execute({ nomeCliente, situacao, dataAbertura, horaAbertura, idMesa }: ICommandRequest) {
        const commandRepository = getCustomRepository(CommandRepositories);

        const command = commandRepository.create({
            nomeCliente,
            situacao,
            dataAbertura,
            horaAbertura,
            idMesa
        });

        await commandRepository.save(command);

        return command;
    }
}

export { CreateCommandService };