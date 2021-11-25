import { Request, Response } from "express";
import { AuthenticateAdministratorService } from "../services/AuthenticateAdministratorService";

class AuthenticateAdministratorController {
    async handle(request: Request, response: Response) {
        const { login, senha } = request.body;

        const authenticateService = new AuthenticateAdministratorService();

        const token = await authenticateService.execute({
            login,
            senha,
        });

        return response.json(token);
    }
}

export { AuthenticateAdministratorController };