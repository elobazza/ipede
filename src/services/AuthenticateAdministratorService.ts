import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AdministratorRepositories } from "../repositories/AdministratorRepositories";


interface IAuthenticateRequest {
    login: string;
    senha: string;
}

class AuthenticateAdministratorService {
    async execute({ login, senha }: IAuthenticateRequest) {
        const administratorRepositories = getCustomRepository(AdministratorRepositories);

        const administrator = await administratorRepositories.findOne({
            login,
        });

        if (!administrator) {
            throw new Error("Login/Password incorrect");
        }

        const passwordMatch = await compare(senha, administrator.senha);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                login: administrator.login,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: administrator.idAdministrador.toString(),
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateAdministratorService };