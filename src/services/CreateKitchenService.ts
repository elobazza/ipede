import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { KitchenRepositories } from "../repositories/KitchenRepositories";

interface IKitchenRequest {
    login: string;
    senha: string;
}

class CreateKitchenService {
    async execute({ login, senha }: IKitchenRequest) {
        const kitchenRepository = getCustomRepository(KitchenRepositories);

        if (!login) {
            throw new Error("Login incorrect");
        }

        const kitchenAlreadyExists = await kitchenRepository.findOne({
            login,
        });

        if (kitchenAlreadyExists) {
            throw new Error("Kitchen already exists");
        }

        const passwordHash = await hash(senha, 8);

        const kitchen = kitchenRepository.create({
            login,
            senha: passwordHash,
        });

        await kitchenRepository.save(kitchen);

        return kitchen;
    }
}

export { CreateKitchenService };