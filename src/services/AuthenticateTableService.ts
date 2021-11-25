import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { TableRepositories } from "../repositories/TableRepositories";


interface IAuthenticateRequest {
    login: string;
    senha: string;
}

class AuthenticateTableService {
    async execute({ login, senha }: IAuthenticateRequest) {
        const tableRepositories = getCustomRepository(TableRepositories);

        const table = await tableRepositories.findOne({
            login,
        });

        if (!table) {
            throw new Error("Login/Password incorrect");
        }

        const passwordMatch = await compare(senha, table.senha);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                login: table.login,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: table.idMesa.toString(),
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateTableService };