import { Request, Response } from "express";
import { AuthenticateTableService } from "../services/AuthenticateTableService";

class AuthenticateTableController {
    async handle(request: Request, response: Response) {
        const { login, senha } = request.body;

        const authenticateService = new AuthenticateTableService();

        const token = await authenticateService.execute({
            login,
            senha,
        });

        return response.json(token);
    }
}

export { AuthenticateTableController };