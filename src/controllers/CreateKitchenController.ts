import { Request, Response } from "express";
import { CreateKitchenService } from "../services/CreateKitchenService";

class CreateKitchenController {
    async handle(request: Request, response: Response) {
        const { login, senha } = request.body;

        const createKitchenService = new CreateKitchenService();

        const kitchen = await createKitchenService.execute({ login, senha });

        return response.json(kitchen);
    }
}

export { CreateKitchenController };