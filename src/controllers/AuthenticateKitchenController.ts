import { Request, Response } from "express";
import { AuthenticateKitchenService } from "../services/AuthenticateKitchenService";

class AuthenticateKitchenController {
    async handle(request: Request, response: Response) {
        const { login, senha } = request.body;

        const authenticateService = new AuthenticateKitchenService();

        const token = await authenticateService.execute({
            login,
            senha,
        });

        return response.json(token);
    }
}

export { AuthenticateKitchenController };