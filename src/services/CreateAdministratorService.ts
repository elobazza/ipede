import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { AdministratorRepositories } from "../repositories/AdministratorRepositories";

interface IUserRequest {
    login: string;
    senha: string;
}

class CreateAdministratorService {
    async execute({ login, senha }: IUserRequest) {
        const admRepository = getCustomRepository(AdministratorRepositories);

        if (!login) {
            throw new Error("Login incorrect");
        }

        const admAlreadyExists = await admRepository.findOne({
            login,
        });

        if (admAlreadyExists) {
            throw new Error("Administrator already exists");
        }

        const passwordHash = await hash(senha, 8);

        const adm = admRepository.create({
            login,
            senha: passwordHash,
        });

        await admRepository.save(adm);

        return adm;
    }
}

export { CreateAdministratorService };