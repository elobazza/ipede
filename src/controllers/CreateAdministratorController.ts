import { Request, Response } from "express";
import { CreateAdministratorService } from "../services/CreateAdministratorService";

class CreateAdministratorController {
    async handle(request: Request, response: Response) {
        const { login, senha } = request.body;

        const createAdministratorService = new CreateAdministratorService();

        const administrator = await createAdministratorService.execute({ login, senha });

        return response.json(administrator);
    }
}

export { CreateAdministratorController };