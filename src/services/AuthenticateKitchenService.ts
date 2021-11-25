import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { KitchenRepositories } from "../repositories/KitchenRepositories";


interface IAuthenticateRequest {
    login: string;
    senha: string;
}

class AuthenticateKitchenService {
    async execute({ login, senha }: IAuthenticateRequest) {
        const kitchenRepositories = getCustomRepository(KitchenRepositories);

        const kitchen = await kitchenRepositories.findOne({
            login,
        });

        if (!kitchen) {
            throw new Error("Login/Password incorrect");
        }

        const passwordMatch = await compare(senha, kitchen.senha);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                login: kitchen.login,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: kitchen.idCozinha.toString(),
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateKitchenService };