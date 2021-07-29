import { Request, Response } from "express";
import { CreateTableService } from "../services/CreateTableService";

class CreateTableController {
    async handle(request: Request, response: Response) {
        const { login, senha, numero } = request.body;

        const createTableService = new CreateTableService();

        const table = await createTableService.execute({ login, senha, numero });

        return response.json(table);
    }
}

export { CreateTableController };