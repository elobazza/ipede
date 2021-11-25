import { Request, Response } from "express";
import { CreateCommandService } from "../services/CreateCommandService";

class CreateCommandController {
    async handle(request: Request, response: Response) {
        const { nomeCliente, idMesa } = request.body;

        const createCommandService = new CreateCommandService();

        const [dataAbertura, horaAbertura] = new Date().toLocaleString().split(" ");

        const situacao = 1;

        const command = await createCommandService.execute({
            nomeCliente,
            situacao,
            dataAbertura,
            horaAbertura,
            idMesa
        });

        return response.json(command);
    }
}

export { CreateCommandController };